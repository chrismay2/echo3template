//Create a namespace
My = {};

/**
 * A simple demo component
 */
My.Component = Core.extend(Echo.Component, {

    $load: function() {
        Echo.ComponentFactory.registerType("MyComponent", this);
    },

    /** @see Echo.Component#componentType */
    componentType: "MyComponent",

    $virtual: {
        /**
         * Programmatically performs a button action.
         */
        doAction: function() {
            this.fireEvent({
                type: "action",
                source: this,
                data: this.get("actionCommand")
            });
        }
    }
});

/**
 * The peer/renderer for the demo component
 */
My.ComponentSync = Core.extend(Echo.Render.ComponentSync, {

    $static: {
        /**
         * Array of properties which may be updated without full re-render.
         * 
         * @type Array
         */
        _supportedPartialProperties: ["selection"]
    },

    $load: function() {
        Echo.Render.registerPeer("MyComponent", this);
    },

    /**
     * the main component (html) element
     */
    _div: null,
    
    /**
     * Adds event listeners.
     */
    _addEventListeners: function() {
        var mouseEnterLeaveSupport = Core.Web.Env.PROPRIETARY_EVENT_MOUSE_ENTER_LEAVE_SUPPORTED;
        var enterEvent = mouseEnterLeaveSupport ? "mouseenter" : "mouseover";
        var exitEvent = mouseEnterLeaveSupport ? "mouseleave" : "mouseout";
        var rolloverEnterRef = Core.method(this, this._processRolloverEnter);
        var rolloverExitRef = Core.method(this, this._processRolloverExit);
        var clickRef = Core.method(this, this._processClick);
    },

    /** @see Echo.Render.ComponentSync#renderAdd */
    renderAdd: function(update, parentElement) {
        this._div = document.createElement("div");
        this._div.style.margin = "20px";
        this._div.style.padding = "5px";
        Echo.Sync.RoundedCorner.render(this.component.render("radius"), this._div);
        Echo.Sync.Color.render(this.component.render("background"), this._div, "backgroundColor");
        parentElement.appendChild(this._div);

        var text = this.component.render("text", "Hello World!");
		this._div.appendChild(document.createTextNode(text));

    },

    /** @see Echo.Render.ComponentSync#renderDisplay */
    renderDisplay: function() {
    	//
    },

    /** @see Echo.Render.ComponentSync#renderDispose */
    renderDispose: function(update) {
        this._div = null;
    },

    /** @see Echo.Render.ComponentSync#renderUpdate */
    renderUpdate: function(update) {
        return true;
    }
});