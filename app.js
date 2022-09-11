import { main } from "./instagram.js";
// import { data } from "./data.js";

const getHahtag = (item) => item.caption.match(/#[\p{L}]+/giu);

async function myAction(input) {
  if (input?.value) {
    let data = await main(input.value);
    document.getElementById("follower-count").innerText =
      data?.profile?.follower_count || "Not Available";
    document.getElementById("following-count").innerText =
      data?.profile?.following_count || "Not Available";
    document.getElementById("media-count").innerText =
      data?.profile?.media_count || "Not Available";
    document.getElementById("er").innerText =
      data?.engagement_rate_avg || "Not Available";
    document.getElementById("placeholder_name").innerText =
      data?.profile?.full_name.charAt(0);
    document.getElementById("full_name").innerText = data?.profile?.full_name;
    document.getElementById("biography").innerText = data?.profile?.biography;

    // wordcloud
    let hashtags = [].concat
      .apply([], [...data.posts.map(getHahtag)])
      .filter((e) => e != null);
    let cloud = hashtags.reduce((arr, word) => {
      let obj = Highcharts.find(arr, (obj) => obj.name === word);
      if (obj) {
        obj.weight += 1;
      } else {
        obj = {
          name: word,
          weight: 1,
        };
        arr.push(obj);
      }
      return arr;
    }, []);
    Highcharts.seriesTypes.wordcloud.prototype.deriveFontSize = function (
      relativeWeight
    ) {
      var maxFontSize = 60;
      // Will return a fontSize between 0px and 25px.
      return Math.floor(maxFontSize * relativeWeight);
    };

    Highcharts.chart("hashtags", {
      accessibility: {
        screenReaderSection: {
          beforeChartFormat:
            "<h5>{chartTitle}</h5>" +
            "<div>{chartSubtitle}</div>" +
            "<div>{chartLongdesc}</div>" +
            "<div>{viewTableButton}</div>",
        },
      },
      series: [
        {
          type: "wordcloud",
          data: cloud,
          name: "Occurrences",
          rotation: {
            from: 0,
            to: 0,
          },
          spiral: "rectangular",
          placementStrategy: "center",
        },
      ],
      title: {
        text: "Frequently Used Hashtags",
      },
      tooltip: {
        headerFormat:
          '<span style="font-size: 16px"><b>{point.key}</b></span><br>',
      },
    });

    // post engagement timeline
    let posts = data?.posts || [];
    let er = [];
    let comments = [];
    let likers = [];
    for (const post of posts) {
      let postDate = new Date(post.taken_at * 1000);
      er.push([
        Date.UTC(
          postDate.getUTCFullYear(),
          postDate.getUTCMonth(),
          postDate.getDay()
        ),
        post.engagement_rate,
      ]);
      // comments.push([
      //   Date.UTC(
      //     postDate.getUTCFullYear(),
      //     postDate.getUTCMonth(),
      //     postDate.getDay()
      //   ),
      //   post.comments,
      // ]);
      // likers.push([
      //   Date.UTC(
      //     postDate.getUTCFullYear(),
      //     postDate.getUTCMonth(),
      //     postDate.getDay()
      //   ),
      //   post.like,
      // ]);
    }
    er.sort((a, b) => a[0] - b[0]);
    // comments.sort((a, b) => a[0] - b[0]);
    // likers.sort((a, b) => a[0] - b[0]);
    Highcharts.chart("container", {
      chart: {
        type: "line",
      },
      title: {
        text: "Post Engagement Timeline",
      },
      yAxis: {
        title: {
          text: "Enagement Score",
        },
      },
      xAxis: {
        type: "datetime",
        dateTimeLabelFormats: {
          // don't display the dummy year
          month: "%e. %b",
          year: "%b",
        },
        title: {
          text: "Post Publish Date",
        },
      },
      colors: ["#2A0944", "#3FA796", "#FEC260", "#A10035", "#000"],
      plotOptions: {
        series: {
          marker: {
            enabled: true,
            radius: 2.5,
          },
        },
      },
      series: [
        {
          name: "Engagement Rate",
          data: er,
        },
        // {
        //   name: "Likers",
        //   data: likers,
        // },
        // {
        //   name: "Commenters",
        //   data: comments,
        // },
      ],
    });
  }
}

document.getElementById("ok_btn").addEventListener("click", function () {
  myAction(document.getElementById("username")).then();
});
