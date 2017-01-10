require({
    baseUrl:"js/libs",
    paths: {
        "jquery":"jquery/jquery.min",
        "querybookmarkstree":"query-bookmarks-tree/querybookmarkstree"
    },
    map:{
        "*":{
            "css":"require-css/css.min"
        }
    }
});


require(['querybookmarkstree'], function (querybookmarkstree) {

    
    var stylesheet = querybookmarkstree.getTreeCSS;
    stylesheet.insertRule("span.node{color:green}", stylesheet.cssRules.length);
    
    var option = {
        onlyFolder: false,
        queryId: function(id){$("#getId").text("The id is : " + id);}
    };
    querybookmarkstree.getTreeDOM($('#bookmarks'), option);
    
});


