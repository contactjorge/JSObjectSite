/*
 * Use something to loop through the array, using the toDataURL method to convert the urls to data uris.
 * 
 * After the iteration is done, log all seven data uris. This will require to wait for toDataURL to finish during each iteration.
 * 
 */



// to data uri
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs

const toDataURL = url => fetch(url)
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  }))


// urls
const urls = [
    'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/220px-Twitter_bird_logo_2012.svg.png',
    'https://pbs.twimg.com/profile_images/839721704163155970/LI_TRk1z_400x400.jpg',
    'http://1.bp.blogspot.com/-5bPNsF5plzw/VnJWs-7RbrI/AAAAAAAARmA/DaZmn8YUjAk/s1600-r/logo_research_at_google_color_1x_web_512dp.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/GoogleMaps.svg/1200px-GoogleMaps.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/3/3d/LARGE_elevation.jpg',
    'https://hdwallsource.com/img/2014/7/large-40566-41516-hd-wallpapers.jpg',
    'https://cdn.eso.org/images/large/eso-paranal-51.jpg',
    'http://apac.thinkwithgoogle.com/images/logo_lockup_think_with_google_stacked.png',
    'https://searchengineland.com/figz/wp-content/seloads/2015/12/google-amp-fast-speed-travel-ss-1920.jpg',
    'https://media.wired.com/photos/592670dfcfe0d93c47430371/master/w_2400,c_limit/YouTube-social-icon2.jpg',
]

/*
 * Todo   
 */ 


// Loop through array and log all 7 data uris.