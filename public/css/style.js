import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'boxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'WebkitBoxSizing': 'border-box',
    'fontFamily': ''Quicksand''
  },
  'html': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#7f8c8d',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'backgroundColor': '#dde1e2',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overscrollBehaviorY': 'contain',
    'WebkitUserSelect': 'none',
    'WebkitTapHighlightColor': 'transparent',
    'WebkitTouchCallout': 'none'
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#7f8c8d',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'backgroundColor': '#dde1e2',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overscrollBehaviorY': 'contain',
    'WebkitUserSelect': 'none',
    'WebkitTapHighlightColor': 'transparent',
    'WebkitTouchCallout': 'none'
  },
  // Personalizados
  'oculto': {
    'display': 'none !important'
  },
  'seleccion': {
    'marginTop': [{ 'unit': 'em', 'value': 6 }],
    'display': 'block',
    'marginBottom': [{ 'unit': 'em', 'value': 6 }]
  },
  'seleccion div': {
    'marginTop': [{ 'unit': 'em', 'value': 2 }]
  },
  'seleccion-avatar': {
    'width': [{ 'unit': 'px', 'value': 150 }],
    'WebkitBorderRadius': '50%',
    'MozBorderRadius': '50%',
    'MsBorderRadius': '50%',
    'OBorderRadius': '50%',
    'borderRadius': '50%',
    'border': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ecf0f1' }],
    'position': 'relative'
  },
  // Modal
  '#modal': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 1000 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'backgroundColor': '#ecf0f1',
    'zIndex': '999',
    'opacity': '0'
  },
  '#modal-avatar': {
    'width': [{ 'unit': 'px', 'value': 50 }],
    'WebkitBorderRadius': '50%',
    'MozBorderRadius': '50%',
    'MsBorderRadius': '50%',
    'OBorderRadius': '50%',
    'borderRadius': '50%',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ecf0f1' }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 15 }],
    'top': [{ 'unit': 'px', 'value': 20 }],
    'zIndex': '99999'
  },
  'nuevo-mensaje': {
    'marginTop': [{ 'unit': 'em', 'value': 6 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }],
    'paddingRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'nuevo-mensaje div': {
    'display': 'inline',
    'float': 'left'
  },
  'div-img': {
    'width': [{ 'unit': 'px', 'value': 60 }]
  },
  'div-mensaje': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  '#cancel-btn': {
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.05 }],
    'zIndex': '9999',
    'only screen&&device-width  375p&&device-height  812p&&-webkit-device-pixel-ratio': {
      'top': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'string', 'value': '!important' }]
    }
  },
  'textarea': {
    'WebkitBoxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'boxSizing': 'border-box',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'resize': 'none',
    'outline': 'none !important',
    'borderRadius': '5px',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'fab': {
    'width': [{ 'unit': 'px', 'value': 70 }],
    'height': [{ 'unit': 'px', 'value': 70 }],
    'backgroundColor': '#3498db',
    'borderRadius': '50%',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#666' }],
    'transition': 'all 0.1s ease-in-out',
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'color': 'white',
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 70 }],
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 20 }],
    'bottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'fab-marker': {
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'backgroundColor': '#00ac09',
    'borderRadius': '50%',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#666' }],
    'transition': 'all 0.1s ease-in-out',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': 'white',
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 55 }],
    'position': 'fixed',
    'left': [{ 'unit': 'px', 'value': 20 }],
    'bottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'fab-photo': {
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'backgroundColor': '#470494',
    'borderRadius': '50%',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#666' }],
    'transition': 'all 0.1s ease-in-out',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': 'white',
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 55 }],
    'position': 'fixed',
    'left': [{ 'unit': 'px', 'value': 80 }],
    'bottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'bubble': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.4 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#ecf0f1',
    'position': 'relative',
    'WebkitBorderRadius': '8px',
    'MozBorderRadius': '8px',
    'MsBorderRadius': '8px',
    'OBorderRadius': '8px',
    'borderRadius': '8px',
    'textAlign': 'left',
    'display': 'inline-block'
  },
  'bubble:hover > over-bubble': {
    'opacity': '1'
  },
  'bubble-container': {
    'width': [{ 'unit': '%H', 'value': 0.75 }],
    'display': 'block',
    'position': 'relative',
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }],
    'verticalAlign': 'top',
    'display': 'inline-block'
  },
  'arrow': {
    'content': '''',
    'display': 'block',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 10 }],
    'top': [{ 'unit': '%V', 'value': 0.1 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'borderTop': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderBottom': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderRight': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ecf0f1' }]
  },
  'timeline': {
    'marginTop': [{ 'unit': 'em', 'value': 6 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'block',
    'listStyleType': 'none',
    'backgroundColor': '#dde1e2',
    'paddingBottom': [{ 'unit': 'em', 'value': 2 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'em', 'value': 2 }]
  },
  'timeline li': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'timeline li:nth-child(even)': {
    'backgroundColor': '#d3d7d8'
  },
  'avatar': {
    'width': [{ 'unit': '%H', 'value': 0.18 }],
    'display': 'inline-block',
    'verticalAlign': 'top',
    'position': 'relative',
    'overflow': 'hidden',
    'marginLeft': [{ 'unit': '%H', 'value': 0.02 }]
  },
  'avatar img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'WebkitBorderRadius': '50%',
    'MozBorderRadius': '50%',
    'MsBorderRadius': '50%',
    'OBorderRadius': '50%',
    'borderRadius': '50%',
    'border': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ecf0f1' }],
    'position': 'relative'
  },
  'avatar:hover > hover': {
    'cursor': 'pointer',
    'opacity': '1'
  },
  'first': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'block',
    'position': 'fixed',
    'zIndex': '999',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'backgroundColor': '#3498db',
    'textShadow': [{ 'unit': 'string', 'value': '#2084c7' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }],
    'color': 'white',
    'textAlign': 'center',
    // margin-top: 1em;
    'fontFamily': '"Lato"',
    'fontSize': [{ 'unit': 'em', 'value': 1.6 }]
  },
  // Iphone X fix
  'icon-twitter': {
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'new': {
    'position': 'absolute',
    'right': [{ 'unit': '%H', 'value': 0.05 }],
    'top': [{ 'unit': 'px', 'value': 30 }]
  },
  'out': {
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.05 }],
    'top': [{ 'unit': 'px', 'value': 30 }]
  },
  'over-bubble': {
    'lineHeight': [{ 'unit': 'em', 'value': 1.4 }],
    'paddingTop': [{ 'unit': '%V', 'value': 0.1 }],
    'backgroundColor': 'rgba(236, 240, 241, 0.8)',
    'position': 'relative',
    'WebkitBorderRadius': '8px',
    'MozBorderRadius': '8px',
    'MsBorderRadius': '8px',
    'OBorderRadius': '8px',
    'borderRadius': '8px',
    'textAlign': 'center',
    'display': 'inline-block',
    'position': 'absolute !important',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '999',
    'WebkitTransitionProperty': 'all',
    'MozTransitionProperty': 'all',
    'OTransitionProperty': 'all',
    'transitionProperty': 'all',
    'WebkitTransitionDuration': '0.3s',
    'MozTransitionDuration': '0.3s',
    'OTransitionDuration': '0.3s',
    'transitionDuration': '0.3s',
    'WebkitTransitionTimingFunction': 'ease-in',
    'MozTransitionTimingFunction': 'ease-in',
    'OTransitionTimingFunction': 'ease-in',
    'transitionTimingFunction': 'ease-in',
    'fontSize': [{ 'unit': 'em', 'value': 2.8 }],
    'textShadow': [{ 'unit': 'string', 'value': 'white' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'action': {
    'marginRight': [{ 'unit': 'em', 'value': 0.3 }],
    'WebkitTransitionProperty': 'all',
    'MozTransitionProperty': 'all',
    'OTransitionProperty': 'all',
    'transitionProperty': 'all',
    'WebkitTransitionDuration': '0.2s',
    'MozTransitionDuration': '0.2s',
    'OTransitionDuration': '0.2s',
    'transitionDuration': '0.2s',
    'WebkitTransitionTimingFunction': 'ease-in',
    'MozTransitionTimingFunction': 'ease-in',
    'OTransitionTimingFunction': 'ease-in',
    'transitionTimingFunction': 'ease-in'
  },
  'icon-star': {
    'WebkitTransitionProperty': 'all',
    'MozTransitionProperty': 'all',
    'OTransitionProperty': 'all',
    'transitionProperty': 'all',
    'WebkitTransitionDuration': '0.2s',
    'MozTransitionDuration': '0.2s',
    'OTransitionDuration': '0.2s',
    'transitionDuration': '0.2s',
    'WebkitTransitionTimingFunction': 'ease',
    'MozTransitionTimingFunction': 'ease',
    'OTransitionTimingFunction': 'ease',
    'transitionTimingFunction': 'ease'
  },
  'icon-star:hover': {
    'cursor': 'pointer',
    'color': '#f39c12'
  },
  'icon-retweet': {
    'WebkitTransitionProperty': 'all',
    'MozTransitionProperty': 'all',
    'OTransitionProperty': 'all',
    'transitionProperty': 'all',
    'WebkitTransitionDuration': '0.2s',
    'MozTransitionDuration': '0.2s',
    'OTransitionDuration': '0.2s',
    'transitionDuration': '0.2s',
    'WebkitTransitionTimingFunction': 'ease',
    'MozTransitionTimingFunction': 'ease',
    'OTransitionTimingFunction': 'ease',
    'transitionTimingFunction': 'ease'
  },
  'icon-retweet:hover': {
    'cursor': 'pointer',
    'color': '#16a085'
  },
  'icon-mail-reply': {
    'WebkitTransitionProperty': 'all',
    'MozTransitionProperty': 'all',
    'OTransitionProperty': 'all',
    'transitionProperty': 'all',
    'WebkitTransitionDuration': '0.2s',
    'MozTransitionDuration': '0.2s',
    'OTransitionDuration': '0.2s',
    'transitionDuration': '0.2s',
    'WebkitTransitionTimingFunction': 'ease',
    'MozTransitionTimingFunction': 'ease',
    'OTransitionTimingFunction': 'ease',
    'transitionTimingFunction': 'ease'
  },
  'icon-mail-reply:hover': {
    'cursor': 'pointer',
    'color': '#3498db'
  },
  'h3': {
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'fontWeight': 'bold',
    'fontFamily': ''Lato'',
    'display': 'inline-block',
    'marginTop': [{ 'unit': 'em', 'value': 0.1 }],
    'marginBottom': [{ 'unit': 'em', 'value': 0.2 }],
    'color': '#95a5a6'
  },
  'retweet': {
    'position': 'absolute',
    'opacity': '1',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'em', 'value': 1 }],
    'display': 'block',
    'backgroundColor': '#16a085',
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }],
    'MozBorderRadiusBottomleft': '5px',
    'WebkitBorderBottomLeftRadius': '5px',
    'borderBottomLeftRadius': '5px',
    'MozBorderRadiusBottomright': '5px',
    'WebkitBorderBottomRightRadius': '5px',
    'borderBottomRightRadius': '5px'
  },
  'retweet icon-retweet': {
    'color': 'white',
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'block',
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }]
  },
  'retweet div': {
    'color': 'white'
  },
  // Perzonalisar
  'button': {
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'borderRadius': '5px',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'color': 'white',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'btn-noti-activadas': {
    'backgroundColor': '#3498db'
  },
  'btn-noti-desactivadas': {
    'backgroundColor': 'red'
  }
});
