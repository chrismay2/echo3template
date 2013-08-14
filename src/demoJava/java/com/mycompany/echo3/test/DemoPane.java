package com.mycompany.echo3.test;



import nextapp.echo.app.Border;
import nextapp.echo.app.Button;
import nextapp.echo.app.Color;
import nextapp.echo.app.ContentPane;
import nextapp.echo.app.Extent;
import nextapp.echo.app.Insets;
import nextapp.echo.app.WindowPane;
import nextapp.echo.app.event.ActionEvent;
import nextapp.echo.app.event.ActionListener;

import com.mycompany.echo3.MyComponent;

public class DemoPane extends ContentPane {

    public DemoPane() {
        
        Button btn = new Button("Click me!");
        btn.setBorder(new Border(2, Color.DARKGRAY, Border.STYLE_DOTTED));
        btn.setRadius(new Insets(5));
        btn.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                addWindow();                
            }
        });
        add(btn);
        
        addWindow();
    }
    

    private void addWindow() {
        WindowPane w = new WindowPane();
        w.setTitle("Test Window");
        w.setWidth(new Extent(400));
        w.setHeight(new Extent(300));
        add(w);
        
        MyComponent myComponent = new MyComponent();
        myComponent.setBackground(Color.GREEN);
        w.add(myComponent);
    }
}
