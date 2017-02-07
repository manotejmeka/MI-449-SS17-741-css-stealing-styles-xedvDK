var CSS_COLOR_NAMES = ['DarkBlue', 'DarkCyan', 'DarkGoldenRod',
  'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen',
  'Darkorange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen',
  'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise',
  'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'Violet', 'Wheat', 'YellowGreen']

function title () {
  var titleTag = document.getElementsByTagName('H1')[0]
  console.log(titleTag)
  var titleTagHTML = titleTag.innerHTML.trim()
  var i = 0
  var titleSpan = ''
  for (i = 0; i < titleTagHTML.length; i++) {
    // console.log(titleTagHTML[i])
    titleSpan += '<span onmouseout="hoverOff(this)" onmouseover="hoverOn(this,' + i + ')">' + titleTagHTML[i] + '</span>'
  }
  titleTag.innerHTML = titleSpan
}

function hoverOff (x) {
  x.style.color = 'Black'
}

function hoverOn (x, i) {
  x.style.color = CSS_COLOR_NAMES[i]
}

title()
