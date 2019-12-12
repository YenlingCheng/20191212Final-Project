var geoData = [
  ['Country', 'Government dissemination abroad', 'Government dissemination(domestic)', 'Foreign Government'],
  ["Afghanistan", 2.598, 2.243, 2.112],
  ["Albania", 2.5, 2.384, 3.028],
  ["Algeria", 2.34, 1.401, 2.212],
  ["Australia", 3.551, 3.145, 3.634],
  ["Austria", 2.458, 2.639, 2.738],
  ["Azerbaijan", 0.49, 0.207, 1.883],
  ["Bahrain", 0.425, 0.508, 0.973],
  ["Bangladesh", 3.129, 2.922, 2.133],
  ["Barbados", 3.66, 3.374, 3.684],
  ["Belarus", 3.139, 2.547, 2.11],
  ["Belgium", 3.735, 3.501, 3.575],
  ["Benin", 3.161, 2.748, 3.035],
  ["Bhutan", 3.175, 1.556, 2.085],
  ["Bolivia", 3.231, 2.647, 1.962],
  ["Bosnia and Herzegovina", 3.54, 2.386, 2.3],
  ["Botswana", 3.63, 3.244, 3.874],
  ["Brazil", 2.978, 2.068, 2.325],
  ["Bulgaria", 3.483, 3.194, 1.741],
  ["Burkina Faso", 2.833, 3.318, 3.754],
  ["Burma/Myanmar", 2.402, 2.471, 2.787],
  ["Burundi", 0.493, 0.96, 3.398],
  ["Cambodia", 2.036, 0.76, 3.249],
  ["Cameroon", 3.514, 3.011, 2.968],
  ["Canada", 3.468, 3.378, 3.3],
  ["Cape Verde", 3.562, 3.643, 3.609],
  ["Central African Republic", 1.477, 1.077, 1.656],
  ["Chad", 1.402, 1.342, 2.047],
  ["China", 0.936, 0.494, 2.754],
  ["Colombia", 2.87, 2.193, 2.14],
  ["Comoros", 2.639, 2.703, 2.583],
  ["Costa Rica", 3.677, 3.787, 3.199],
  ["Croatia", 2.936, 2.714, 2.57],
  ["Cuba", 0.877, 0.414, 3.056],
  ["Cyprus", 3.623, 2.871, 2.342],
  ["Czech Republic", 3.673, 2.721, 2.402],
  ["Democratic Republic of the Congo", 1.286, 1.029, 2.199],
  ["Denmark", 3.704, 3.895, 3.229],
  ["Djibouti", 1.735, 1.36, 2.49],
  ["Dominican Republic", 3.492, 1.982, 1.973],
  ["Ecuador", 3.429, 3.463, 2.506],
  ["Egypt", 1.595, 1.239, 2.26],
  ["El Salvador", 3.407, 2.909, 3.413],
  ["Equatorial Guinea", 0.921, 1.418, 2.722],
  ["Eritrea", 1.277, 0.891, 1.957],
  ["Estonia", 3.874, 3.811, 1.989],
  ["Ethiopia", 1.961, 2.692, 1.966],
  ["Fiji", 2.636, 2.142, 3.441],
  ["Finland", 3.902, 3.886, 3.125],
  ["France", 3.214, 3.208, 2.779],
  ["Gabon", 2.012, 2.21, 2.519],
  ["Georgia", 2.864, 2.181, 1.41],
  ["Germany", 3.901, 3.91, 3.38],
  ["Ghana", 3.414, 3.303, 2.823],
  ["Greece", 2.454, 2.327, 3.097],
  ["Guatemala", 1.696, 1.097, 3.3],
  ["Guinea", 2.306, 2.416, 2.917],
  ["Guinea-Bissau", 3.366, 2.774, 3.572],
  ["Guyana", 2.637, 2.606, 3.808],
  ["Haiti", 2.173, 1.026, 2.941],
  ["Honduras", 1.683, 1.783, 2.846],
  ["Hong Kong", 0.933, 0.483, 1.773],
  ["Hungary", 1.862, 1.75, 1.136],
  ["Iceland", 3.635, 3.207, 3.933],
  ["India", 2.2, 2.092, 2.493],
  ["Indonesia", 2.863, 2.469, 2.767],
  ["Iran", 1.177, 0.775, 1.91],
  ["Iraq", 2.248, 1.385, 2.214],
  ["Ireland", 3.494, 3.648, 2.882],
  ["Israel", 2.387, 2.908, 2.152],
  ["Italy", 3.745, 3.465, 2.986],
  ["Ivory Coast", 2.26, 2.358, 3.594],
  ["Jamaica", 3.637, 3.23, 3.387],
  ["Japan", 3.339, 3.312, 3.27],
  ["Jordan", 2.983, 2.896, 3.131],
  ["Kazakhstan", 1.826, 0.982, 1.896],
  ["Kenya", 2.625, 1.612, 3.05],
  ["Kosovo", 2.63, 1.529, 1.321],
  ["Kuwait", 3.438, 2.293, 2.758],
  ["Kyrgyzstan", 2.714, 1.849, 2.207],
  ["Laos", 3.061, 2.645, 3.765],
  ["Latvia", 3.822, 3.805, 0.524],
  ["Lebanon", 2.489, 2.387, 1.892],
  ["Lesotho", 2.783, 2.535, 3.479],
  ["Liberia", 3.305, 2.37, 3.502],
  ["Libya", 2.155, 1.925, 1.495],
  ["Lithuania", 3.841, 3.717, 1.781],
  ["Luxembourg", 3.834, 3.352, 3.312],
  ["Macedonia", 3.19, 2.83, 2.229],
  ["Madagascar", 2.201, 1.871, 2.607],
  ["Malawi", 3.356, 3.44, 3.858],
  ["Malaysia", 2.283, 2.904, 3.732],
  ["Maldives", 1.816, 1.488, 3.27],
  ["Mali", 2.983, 2.925, 2.455],
  ["Malta", 2.934, 1.934, 3.907],
  ["Mauritania", 1.754, 1.695, 3.055],
  ["Mauritius", 2.436, 2.104, 3.378],
  ["Mexico", 3.135, 2.841, 3.508],
  ["Moldova", 3.224, 3.378, 2.018],
  ["Mongolia", 3.589, 2.495, 1.705],
  ["Montenegro", 3.364, 1.907, 2.273],
  ["Morocco", 2.837, 2.934, 3.103],
  ["Mozambique", 3.217, 2.902, 3.35],
  ["Namibia", 3.516, 3.121, 3.708],
  ["Nepal", 2.782, 2.44, 2.733],
  ["Netherlands", 3.915, 3.832, 3.338],
  ["New Zealand", 3.882, 3.722, 3.369],
  ["Nicaragua", 1.088, 0.786, 2.153],
  ["Niger", 2.433, 2.441, 2.913],
  ["Nigeria", 2.763, 2.716, 3.007],
  ["North Korea", 0.697, 1.286, 1.802],
  ["Norway", 3.608, 3.526, 2.907],
  ["Oman", 2.516, 2.143, 2.323],
  ["Pakistan", 1.837, 2.534, 1.571],
  ["Palestine/Gaza", 1.478, 1.616, 2.559],
  ["Palestine/West Bank", 3.391, 3.429, 2.16],
  ["Panama", 3.663, 3.262, 2.604],
  ["Papua New Guinea", 3.533, 3.309, 3.647],
  ["Paraguay", 3.052, 2.544, 3.652],
  ["Peru", 3.594, 2.645, 3.519],
  ["Philippines", 1.38, 1.337, 3.039],
  ["Poland", 3.168, 2.618, 3.301],
  ["Portugal", 3.816, 3.816, 3.936],
  ["Qatar", 2.095, 2.233, 1.094],
  ["Republic of the Congo", 1.983, 1.487, 2.516],
  ["Romania", 3.241, 3.025, 2.511],
  ["Russia", 0.93, 0.509, 2.943],
  ["Rwanda", 2.143, 2.649, 2.907],
  ["Sao Tome and Principe", 3.77, 3.498, 3.632],
  ["Saudi Arabia", 1.521, 1.152, 3.628],
  ["Senegal", 3.189, 2.979, 2.74],
  ["Serbia", 3.286, 0.522, 2.136],
  ["Seychelles", 3.271, 3.138, 3.571],
  ["Sierra Leone", 3.1, 2.752, 3.84],
  ["Singapore", 3.065, 2.471, 3.048],
  ["Slovakia", 3.742, 3.481, 2.86],
  ["Slovenia", 3.77, 3.472, 3.738],
  ["Solomon Islands", 3.675, 3.139, 3.884],
  ["Somalia", 2.139, 1.023, 1.981],
  ["Somaliland", 2.664, 1.963, 3.011],
  ["South Africa", 3.149, 3.126, 2.656],
  ["South Korea", 3.523, 3.631, 2.924],
  ["South Sudan", 0.758, 0.463, 1.677],
  ["Spain", 3.881, 3.732, 3.082],
  ["Sri Lanka", 2.866, 2.222, 3.327],
  ["Sudan", 2.167, 1.353, 2.416],
  ["Suriname", 3.14, 2.887, 3.702],
  ["Swaziland", 3.062, 2.896, 3.462],
  ["Sweden", 3.867, 3.886, 3.22],
  ["Switzerland", 3.846, 3.812, 3.941],
  ["Syria", 0.443, 0.26, 1.345],
  ["Taiwan", 3.061, 3.133, 0.264],
  ["Tajikistan", 1.523, 0.691, 1.511],
  ["Tanzania", 2.9, 1.974, 3.427],
  ["Thailand", 1.275, 1.53, 3.655],
  ["The Gambia", 3.423, 2.936, 3.596],
  ["Timor-Leste", 2.482, 2.289, 3.081],
  ["Togo", 1.531, 1.292, 2.599],
  ["Trinidad and Tobago", 3.803, 3.239, 3.953],
  ["Tunisia", 2.938, 3.091, 2.586],
  ["Turkey", 1.257, 1.088, 2.445],
  ["Turkmenistan", 1.449, 0.781, 3.525],
  ["Uganda", 2.971, 2.675, 3.186],
  ["Ukraine", 2.441, 2.352, 1.525],
  ["United Arab Emirates", 2.257, 2.241, 2.275],
  ["United Kingdom", 3.024, 3.008, 2.351],
  ["United States", 2.222, 2.694, 1.525],
  ["Uruguay", 3.75, 3.507, 3.912],
  ["Uzbekistan", 1.594, 1.253, 2.078],
  ["Vanuatu", 3.756, 3.813, 3.15],
  ["Venezuela", 0.321, 0.284, 1.46],
  ["Vietnam", 2.242, 1.617, 2.911],
  ["Yemen", 0.432, 0.454, 1.303],
  ["Zambia", 1.756, 1.525, 3.439],
  ["Zanzibar", 2.807, 2.302, 3.273],
  ["Zimbabwe", 0.555, 1.122, 3.14]
]


// 存取資料
function selectData(type) {
  resGeoData = []
  for (var i = 0; i < geoData.length; i++) {
    countryLine = []
    // 國家
    countryLine.push(geoData[i][0])
    // 第一組/第二組資料
    countryLine.push(geoData[i][type])
    resGeoData.push(countryLine)
  }
  return resGeoData
}

google.charts.load('current', {
  'packages': ['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});

function f(type) {
  console.log('button clicked' + type)
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var geoDataNow = selectData(type)
    var data = google.visualization.arrayToDataTable(geoDataNow);

    var options = {
      colorAxis: {
        colors: ['#025951', '#689877', '#F2E6D0']
      }

    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);

  }


}
f(1)
