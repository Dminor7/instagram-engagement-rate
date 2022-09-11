const url = {
  webProfileInfo: function (username) {
    // return `https://i.instagram.com/api/v1/users/web_profile_info/?username=${username}`
    return `https://www.instagram.com/${username}/?__a=1&__d=dis`;
  },
  posts: function (userId) {
    var url = new URL(
        "https://www.instagram.com/graphql/query/?query_hash=69cba40317214236af40e7efa697781d"
      ),
      params = {
        variables: JSON.stringify({ id: userId.toString(), first: 50 }),
      };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    return url;
  },
};
const userAgents = [
  "Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 105.0.0.11.118 (iPhone11,8; iOS 12_3_1; en_US; en-US; scale=2.00; 828x1792; 165586599)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone12,1; iOS 15_5; en_US; en-US; scale=2.00; 828x1792; 376668393)",
  "Mozilla/5.0 (Linux; Android 9; SM-A102U Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.136 Mobile Safari/537.36 Instagram 155.0.0.37.107 Android (28/9; 320dpi; 720x1468; samsung; SM-A102U; a10e; exynos7885; en_US; 239490550)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone12,1; iOS 15_5; en_US; en-US; scale=2.00; 828x1792; 376668393) NW/3",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone11,8; iOS 15_5; en_US; en-US; scale=2.00; 828x1792; 376668393)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone14,3; iOS 15_5; en_US; en-US; scale=3.00; 1284x2778; 376668393)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone13,4; iOS 15_5; en_US; en-US; scale=3.00; 1284x2778; 376668393)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone13,2; iOS 15_5; en_US; en-US; scale=3.00; 1170x2532; 376668393)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone14,3; iOS 15_5; en_US; en-US; scale=3.00; 1284x2778; 376668393) NW/3",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone14,5; iOS 15_5; en_US; en-US; scale=3.00; 1170x2532; 376668393)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone13,4; iOS 15_5; en_US; en-US; scale=3.00; 1284x2778; 376668393) NW/3",
  "Mozilla/5.0 (Linux; Android 10; SM-G973F Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.198 Mobile Safari/537.36 Instagram 166.1.0.42.245 Android (29/10; 420dpi; 1080x2042; samsung; SM-G973F; beyond1; exynos9820; en_GB; 256099204)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone14,5; iOS 15_5; en_US; en-US; scale=3.00; 1170x2532; 376668393) NW/3",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 142.0.0.22.109 (iPhone12,5; iOS 14_1; en_US; en-US; scale=3.00; 1242x2688; 214888322) NW/1",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone13,2; iOS 15_5; en_US; en-US; scale=3.00; 1170x2532; 376668393) NW/3",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone11,8; iOS 15_5; en_US; en-US; scale=2.00; 828x1792; 376668393) NW/3",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 160.1.0.31.120 (iPhone8,1; iOS 13_5_1; en_US; en-US; scale=2.00; 750x1334; 246979827) NW/1",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone14,2; iOS 15_5; en_US; en-US; scale=3.00; 1170x2532; 376668393)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone13,3; iOS 15_5; en_US; en-US; scale=3.00; 1170x2532; 376668393)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone12,5; iOS 15_5; en_US; en-US; scale=3.00; 1242x2688; 376668393)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 123.1.0.26.115 (iPhone11,8; iOS 13_3; en_US; en-US; scale=2.00; 828x1792; 190542906)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone12,8; iOS 15_5; en_US; en-US; scale=2.00; 750x1334; 376668393)",
  "Mozilla/5.0 (Linux; Android 10; SM-A102U Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.99 Mobile Safari/537.36 Instagram 167.0.0.24.120 Android (29/10; 320dpi; 720x1402; samsung; SM-A102U; a10e; exynos7884B; en_US; 256966589)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone14,2; iOS 15_5; en_US; en-US; scale=3.00; 1170x2532; 376668393) NW/3",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone12,1; iOS 15_4_1; en_US; en-US; scale=2.00; 828x1792; 376668393)",
  "Mozilla/5.0 (Linux; Android 9; SM-G955U Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/84.0.4147.111 Mobile Safari/537.36 Instagram 153.0.0.34.96 Android (28/9; 420dpi; 1080x2094; samsung; SM-G955U; dream2qltesq; qcom; en_US; 236572377)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone13,3; iOS 15_5; en_US; en-US; scale=3.00; 1170x2532; 376668393) NW/3",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone12,5; iOS 15_5; en_US; en-US; scale=3.00; 1242x2688; 376668393) NW/3",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone12,1; iOS 15_4_1; en_US; en-US; scale=2.00; 828x1792; 376668393) NW/3",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.0.0.17.109 (iPhone12,1; iOS 15_5; en_US; en-US; scale=2.00; 828x1792; 375924574)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone12,8; iOS 15_5; en_US; en-US; scale=2.00; 750x1334; 376668393) NW/3",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone11,8; iOS 15_4_1; en_US; en-US; scale=2.00; 828x1792; 376668393)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone12,1; iOS 15_5; en_US; en-US; scale=2.21; 828x1792; 376668393)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.0.0.17.109 (iPhone12,1; iOS 15_5; en_US; en-US; scale=2.00; 828x1792; 375924574) NW/3",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 123.0.0.24.115 (iPhone11,8; iOS 13_3; en_US; en-US; scale=2.00; 828x1792; 188362626)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 123.1.0.26.115 (iPhone12,1; iOS 13_3; en_US; en-US; scale=2.00; 828x1792; 190542906)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 152.0.0.21.114 (iPhone12,3; iOS 13_6_1; en_US; en-US; scale=3.00; 1125x2436; 234053878)",
  "Mozilla/5.0 (Linux; Android 9; SM-G960U Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/85.0.4183.81 Mobile Safari/537.36 Instagram 156.0.0.26.109 Android (28/9; 480dpi; 1080x2076; samsung; SM-G960U; starqltesq; qcom; en_US; 240726484)",
  "Mozilla/5.0 (Linux; Android 10; SM-N975U Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/84.0.4147.89 Mobile Safari/537.36 Instagram 135.0.0.28.119 Android (29/10; 480dpi; 1080x2051; samsung; SM-N975U; d2q; qcom; en_US; 206670927)",
  "Mozilla/5.0 (Linux; Android 10; SM-G960U Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/84.0.4147.125 Mobile Safari/537.36 Instagram 156.0.0.26.109 Android (29/10; 720dpi; 1440x2744; samsung; SM-G960U; starqltesq; qcom; en_US; 240726484)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone12,1; iOS 15_5; en_US; en-US; scale=2.21; 828x1792; 376668393) NW/3",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone13,2; iOS 15_4_1; en_US; en-US; scale=3.00; 1170x2532; 376668393)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 238.0.0.13.112 (iPhone12,1; iOS 15_5; en_US; en-US; scale=2.00; 828x1792; 374251869)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone12,1; iOS 15_5; es_MX; es-MX; scale=2.00; 828x1792; 376668393)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 240.1.0.26.107 (iPhone12,1; iOS 15_5; en_US; en-US; scale=2.00; 828x1792; 378200232)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone12,3; iOS 15_5; en_US; en-US; scale=3.00; 1125x2436; 376668393)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.0.0.17.109 (iPhone11,8; iOS 15_5; en_US; en-US; scale=2.00; 828x1792; 375924574)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 242.0.0.7.110 (iPhone12,1; iOS 15_5; en_US; en-US; scale=2.00; 828x1792; 380322996)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone11,6; iOS 15_5; en_US; en-US; scale=3.00; 1242x2688; 376668393)",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 239.2.0.17.109 (iPhone11,8; iOS 15_4_1; en_US; en-US; scale=2.00; 828x1792; 376668393) NW/3",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 123.1.0.26.115 (iPhone11,6; iOS 13_3; en_US; en-US; scale=3.00; 1242x2688; 190542906)",
];

const getUserAgent = () => {
  const random = Math.floor(Math.random() * userAgents.length);
  return userAgents[random];
};
const instagram = {
  profileInfo: {},
  postInfo: {},

  profile: async function (webProfileInfoUrl) {
    const response = await fetch(webProfileInfoUrl, {
      method: "GET",
      mode: "no-cors",
      headers: {
        authority: "i.instagram.com",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        accept: "application/json",
        origin: "https://www.instagram.com",
        referer: "https://www.instagram.com/",
        "user-agent": getUserAgent(),
      },
    });
    const profile = await response.json();
    return profile;
  },
  posts: async function (postUrl) {
    const response = await fetch(postUrl, {
      method: "GET",
      mode: "no-cors",
      headers: {
        authority: "instagram.com",
        accept: "application/json",
        "accept-language": "en-GB,en;q=0.9",
        referer: "https://www.instagram.com/",
        "user-agent": getUserAgent(),
      },
    });
    const post = await response.json();
    return post;
  },
  engagement_rate: async function (username) {
    let images = [],
      output = {},
      like_c,
      comments_c,
      video_view_c,
      engagement_rate,
      engagement_rate_sum = 0,
      temp_divisor = 0,
      engagement_rate_avg = 0;

    let profile = await this.profile(url.webProfileInfo(username));
    if (profile) {
      this.profileInfo.biography = profile.graphql.user.biography;
      this.profileInfo.business_category_name =
        profile.graphql.user.business_category_name;
      this.profileInfo.category_enum = profile.graphql.user.category_enum;
      this.profileInfo.category_name = profile.graphql.user.category_name;
      this.profileInfo.following_count = profile.graphql.user.edge_follow.count;
      this.profileInfo.follower_count =
        profile.graphql.user.edge_followed_by.count;
      this.profileInfo.media_count =
        profile.graphql.user.edge_owner_to_timeline_media.count;
      this.profileInfo.external_url = profile.graphql.user.external_url;
      this.profileInfo.full_name = profile.graphql.user.full_name;
      this.profileInfo.user_id = profile.graphql.user.id;
      this.profileInfo.business_account =
        profile.graphql.user.is_business_account;
      this.profileInfo.is_private = profile.graphql.user.is_private;
      this.profileInfo.is_professional_account =
        profile.graphql.user.is_professional_account;
      this.profileInfo.is_verified = profile.graphql.user.is_verified;
      this.profileInfo.username = profile.graphql.user.username;
      this.profileInfo.profile_pic_url = profile.graphql.user.profile_pic_url;
      this.profileInfo.profile_pic_url_hd =
        profile.graphql.user.profile_pic_url_hd;
    }
    if (this.profileInfo?.user_id) {
      let posts = await this.posts(url.posts(this.profileInfo.user_id));
      let edges = posts.data.user.edge_owner_to_timeline_media.edges;
      for (let p in edges) {
        if (edges.hasOwnProperty(p)) {
          like_c = edges[p]["node"]["edge_media_preview_like"]["count"];
          comments_c = edges[p]["node"]["edge_media_to_comment"]["count"];
          video_view_c = edges[p]?.node?.video_view_count || 0;
          temp_divisor = this.profileInfo.follower_count;
          engagement_rate = ((like_c + comments_c) / temp_divisor) * 100;
          engagement_rate_sum += engagement_rate;
          engagement_rate = Number(engagement_rate.toFixed(3));
          images.push({
            type: edges[p]["node"]["__typename"],
            caption:
              edges[p]["node"]["edge_media_to_caption"]["edges"].length > 0
                ? edges[p]["node"]["edge_media_to_caption"]["edges"][0]["node"][
                    "text"
                  ]
                : "",
            engagement_rate: engagement_rate,
            like: like_c,
            comments: comments_c,
            video_views: video_view_c,
            taken_at: edges[p].node.taken_at_timestamp,
            link:
              "https://www.instagram.com/p/" + edges[p]["node"]["shortcode"],
            thumbnail: edges[p]["node"]["thumbnail_resources"][1]["src"],
          });
        }
      }
      if (images.length > 0) {
        engagement_rate_avg = engagement_rate_sum / images.length;
        engagement_rate_avg = Number(engagement_rate_avg.toFixed(3));
      }
      output = {
        profile: this.profileInfo,
        engagement_rate_avg: engagement_rate_avg,
        posts: images,
      };
    }

    return output;
  },
};
export const main = async (username) => {
  // instagram.profile(url.webProfileInfo("d_minor_7")).then(data => console.log(data))

  let data = await instagram.engagement_rate(username);
  return data;
};
