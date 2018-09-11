import React from 'react';
import PropTypes from 'prop-types';
import FroalaEditor from 'react-froala-wysiwyg';

const getDefaultToolbarButtons = () => {
  return [
    'paragraphFormat',
    'bold',
    'italic',
    'underline',
    'fontSize',
    '|',
    'color',
    'align',
    'formatUL',
    'insertHR',
    'insertLink',
    'insertImage',
    'insertTable',
    'undo',
    'redo',
    'clearFormatting',
    'html'
  ];
};

const getMediumToolbarButtons = () => {
  return [
    'paragraphFormat',
    'bold',
    'italic',
    'underline',
    'fontSize',
    '|',
    'color',
    'align',
    'formatOL',
    'formatUL',
    'insertHR',
    'insertLink',
    'insertImage',
    'insertTable',
    'html'
  ];
};

const getOptions = () => {
  return {
    key: '',
    htmlExecuteScripts: false,
    toolbarButtons: getDefaultToolbarButtons(),
    toolbarButtonsMD: getMediumToolbarButtons(),
    toolbarButtonsSM: getMediumToolbarButtons(),
    heightMin: 250,
    imageDefaultWidth: 0,
    imageUploadURL: '/api/image/redactor_upload',
    imageManagerPreloader: '/static/images/loader.gif',
    imageUploadParams: {
      csrfmiddlewaretoken: ''
    },
    height: 250,
    htmlAllowedAttrs: [
      'accept',
      'accept-charset',
      'accesskey',
      'action',
      'align',
      'allowfullscreen',
      'allowtransparency',
      'alt',
      'async',
      'autocomplete',
      'autofocus',
      'autoplay',
      'autosave',
      'background',
      'bgcolor',
      'border',
      'charset',
      'cellpadding',
      'cellspacing',
      'checked',
      'cite',
      'class',
      'color',
      'cols',
      'colspan',
      'content',
      'contenteditable',
      'contextmenu',
      'controls',
      'coords',
      'data',
      'data-.*',
      'datetime',
      'default',
      'defer',
      'dir',
      'dirname',
      'disabled',
      'download',
      'draggable',
      'dropzone',
      'enctype',
      'for',
      'form',
      'formaction',
      'frameborder',
      'headers',
      'height',
      'hidden',
      'high',
      'href',
      'hreflang',
      'http-equiv',
      'icon',
      'id',
      'ismap',
      'itemprop',
      'keytype',
      'kind',
      'label',
      'lang',
      'language',
      'list',
      'loop',
      'low',
      'max',
      'maxlength',
      'media',
      'method',
      'min',
      'mozallowfullscreen',
      'multiple',
      'muted',
      'name',
      'novalidate',
      'open',
      'optimum',
      'pattern',
      'ping',
      'placeholder',
      'playsinline',
      'poster',
      'preload',
      'pubdate',
      'radiogroup',
      'readonly',
      'rel',
      'required',
      'reversed',
      'rows',
      'rowspan',
      'sandbox',
      'scope',
      'scoped',
      'scrolling',
      'seamless',
      'selected',
      'shape',
      'size',
      'sizes',
      'span',
      'src',
      'srcdoc',
      'srclang',
      'srcset',
      'start',
      'step',
      'summary',
      'spellcheck',
      'style',
      'tabindex',
      'target',
      'title',
      'type',
      'translate',
      'usemap',
      'value',
      'valign',
      'webkitallowfullscreen',
      'width',
      'wrap',
      'messenger_app_id',
      'page_id',
      'color',
      'size'
    ],
    htmlRemoveTags: [],
    charCounterCount: false,
    imageManagerLoadURL: '/api/image/froala_browse',
    zIndex: 900,
    pastePlain: true
  };
};

class FroalaWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: ''
    };
  }

  // componentWillUnmount() {
  //   const valueEl = this.el.$element.find('.fr-element.fr-view');
  //   if (valueEl.length) {
  //     valueEl.empty();
  //   }
  // }

  handleChange(model) {
    this.setState({
      model
    });
  }

  render() {
    return (
      <FroalaEditor
        ref={node => (this.el = node)}
        model={this.state.value}
        onModelChange={this.handleChange.bind(this)}
        config={getOptions()}
      />
    );
  }
}

export default FroalaWrapper;
