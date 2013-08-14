init = function() {
    Core.Debug.consoleElement = document.getElementById("debugconsole");
    Core.Web.init();

    var app = new TestApp();
    var client = new Echo.FreeClient(app, document.getElementById("rootArea"));
    client.loadStyleSheet("Default.stylesheet.xml");
    client.init();
};

/**
 * Test application for demo'ing the custom component
 */
TestApp = Core.extend(Echo.Application, {

    _mainSplitPane: null,
    _cboColor: null,
    _chkRadius: null,    
    
    $construct: function() {
    	//call super constructor
        Echo.Application.call(this);
        
        //build basic UI
        var contentPane = new Echo.ContentPane();
        this.rootComponent.add(contentPane);

        this._mainSplitPane = new Echo.SplitPane({
             orientation: Echo.SplitPane.ORIENTATION_HORIZONTAL_LEFT_RIGHT,
             resizable: true,
             separatorPosition: "220px"
        });
        contentPane.add(this._mainSplitPane);
        
        var controlsColumn = new Echo.Column();
        this._mainSplitPane.add(controlsColumn);
        
        //define action listener
        var that = this;
        var doAction = function(e) {
            that._reloadComponent();
        };

        //checkbox for switching on/off the radius
        this._chkRadius = new Echo.CheckBox({
            selected: false,
            text: "Radius 10px",
            events: { action: doAction }
        });
        controlsColumn.add(this._chkRadius);

        //combo box for selecting the color
        var cboColorAttr = {};
        cboColorAttr.items = [{
            text: "Green",
            id: "green"
        }, {
            text: "Orange",
            id: "orange"
        }, {
            text: "Light gray",
            id: "#dddddd"
        }];        
        cboColorAttr.selectedId = "#dddddd";
        cboColorAttr.events = { action: doAction };
        controlsColumn.add(this._cboColor = new Echo.SelectField(cboColorAttr));

        //create component
        this._reloadComponent();
    },

    
    _reloadComponent: function() {
    	//remove row container if it already there
        if  (this._mainSplitPane.children.length > 1) {
            this._mainSplitPane.remove(1);
        }

        //create a row container
        var row = new Echo.Row();
        this._mainSplitPane.add(row);
        
        //create and add component
        var component = new My.Component();
        component.set("background", this._cboColor.get("selectedId"));
        component.set("radius", this._chkRadius.get("selected") ? "10px" : null);
        row.add(component);
    }
});
