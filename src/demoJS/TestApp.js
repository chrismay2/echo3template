init = function() {
    Core.Debug.consoleElement = document.getElementById("debugconsole");
    Core.Web.init();

    var app = new TestApp();
    var client = new Echo.FreeClient(app, document.getElementById("rootArea"));
    client.loadStyleSheet("Default.stylesheet.xml");
    client.init();
};

TestApp = Core.extend(Echo.Application, {

    _mainSplitPane: null,
    _cboColor: null,
    
    $construct: function() {
        Echo.Application.call(this);
        
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
            that._showTable();
        };

        this._chkRadius = new Echo.CheckBox({
            selected: false,
            text: "Radius 8px",
            events: {
                action: doAction
            }
        });
        controlsColumn.add(this._chkRadius);

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
        cboColorAttr.events = {
            action: doAction
        };
        controlsColumn.add(this._cboColor = new Echo.SelectField(cboColorAttr));
        
        this._showTable();
    },

    
    _showTable: function() {
    	
        if  (this._mainSplitPane.children.length > 1) {
            this._mainSplitPane.remove(1);
        }

        var container = new Echo.Row({});
        this._mainSplitPane.add(container);
        
        this._component = new My.Component();
        this._component.set("background", this._cboColor.get("selectedId"));
        this._component.set("radius", this._chkRadius.get("selected") ? "8px" : null);
        
        container.add(this._component);
    }
});
