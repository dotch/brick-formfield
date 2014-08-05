/* global Platform */

(function () {
  var currentScript = document._currentScript || document.currentScript;

  function shimShadowStyles(styles, tag) {
    if (!Platform.ShadowCSS) {
      return;
    }
    for (var i = 0; i < styles.length; i++) {
      var style = styles[i];
      var cssText = Platform.ShadowCSS.shimStyle(style, tag);
      Platform.ShadowCSS.addCssToDocument(cssText);
      style.remove();
    }
  }

  var BrickFormfieldElementPrototype = Object.create(HTMLElement.prototype);

  // Lifecycle methods

  BrickFormfieldElementPrototype.createdCallback = function () {

  };

  BrickFormfieldElementPrototype.attachedCallback = function () {



    var formField = this;

    // import template
    var importDoc = currentScript.ownerDocument;
    var templateContent = importDoc.querySelector('template').content;

    // shim styling for polyfill
    shimShadowStyles(templateContent.querySelectorAll('style'),'brick-formfield');

    // create shadowRoot and append template
    var shadowRoot = this.createShadowRoot();
    shadowRoot.appendChild(templateContent.cloneNode(true));


  };

  BrickFormfieldElementPrototype.detachedCallback = function () {

  };

  BrickFormfieldElementPrototype.attributeChangedCallback = function (attr, oldVal, newVal) {
    if (attr in attrs) {
      attrs[attr].call(this, oldVal, newVal);
    }
  };

  // Attribute handlers

  var attrs = {
    'attr': function (oldVal, newVal) {

    }
  };

  // Custom methods

  BrickFormfieldElementPrototype.foo = function () {

  };

  // Property handlers

  Object.defineProperties(BrickFormfieldElementPrototype, {
    'prop': {
      get : function () {

      },
      set : function (newVal) {

      }
    }
  });

  // Register the element

  window.BrickFormfieldElement = document.registerElement('brick-formfield', {
    prototype: BrickFormfieldElementPrototype
  });

})();
