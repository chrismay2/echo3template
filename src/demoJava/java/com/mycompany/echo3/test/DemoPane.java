/* 
 * This file is part of the Echo Web Application Framework (hereinafter "Echo").
 * Copyright (C) 2002-2013 NextApp, Inc.
 *
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 */

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
