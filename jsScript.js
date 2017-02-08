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

/* Better way to code it
function title () {
  var titleTag = document.getElementsByTagName('H1')[0]
  console.log(titleTag)
  var titleTagHTML = titleTag.innerHTML.trim()
  var i = 0
  var titleSpan = ''
  var style = document.createElement('style');
  for (i = 0; i < titleTagHTML.length; i++) {
    // console.log(titleTagHTML[i])
    titleSpan += '<span class="title title-' + i + '">' + titleTagHTML[i] + '</span>'
    css = '.title-' + i + ':hover { color: ' + CSS_COLOR_NAMES[i] + '; } '
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
  }
  titleTag.innerHTML = titleSpan
  document.getElementsByTagName('head')[0].appendChild(style);
}

title()
*/
