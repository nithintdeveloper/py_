apis = {"predefined": [
                 {
                     "apiId": 100,
                     "api": "API100",
                     "family": "Vertex",
                     "isDefault": false
                 },
                 {
                     "apiId": 101,
                     "api": "API101",
                     "family": "Vertex",
                     "isDefault": false
                 },
                 {
                     "apiId": 102,
                     "api": "API102",
                     "family": "Vertex",
                     "isDefault": false
                 },
                 {
                     "apiId": 103,
                     "api": "API103",
                     "family": "Composer",
                     "isDefault": true
                 },
                 {
                     "apiId": 104,
                     "api": "API104",
                     "family": "Composer",
                     "isDefault": true
                 },
                 {
                     "apiId": 105,
                     "api": "API105",
                     "family": "Maps",
                     "isDefault": true
                 },
                 {
                     "apiId": 106,
                     "api": "API106",
                     "family": "Maps",
                     "isDefault": true
                 },


             ],
                 "selectedApis": [101,104]
             }
$(document).ready(function() {
    pageRefresh();
     $('#add_apis').click(function(){
         pageRefresh();
      });

});



function pageRefresh(){
    $('#leftbox_select').empty()
    $('#rightbox_select').empty()
    $("div.tree-multiselect").remove();
    $.each(apis.predefined, function (i) {
                   var selected = apis.selectedApis.includes(apis.predefined[i].apiId) ? "selected" : "";
                   $('#leftbox_select').append("<option value="+apis.predefined[i].apiId+" data-section="+apis.predefined[i].family+" "+selected+" data-index='1'>"+apis.predefined[i].api+"</option>");
                   if (selected){
                         $('#rightbox_select').append("<option value="+apis.predefined[i].apiId+" data-section="+apis.predefined[i].family+" selected data-index='1'>"+apis.predefined[i].api+"</option>");
                   }
      });
     $("#leftbox_select").treeMultiselect({
                     allowBatchSelection: true,
                     enableSelectAll: true,
                     searchable: true,
                     sortable: true,
                     startCollapsed: false,
                     hideSidePanel: true
        });
       $("#rightbox_select").treeMultiselect({
                     allowBatchSelection: true,
                     enableSelectAll: true,
                     searchable: true,
                     sortable: true,
                     startCollapsed: false,
                     hideSidePanel: true
       });
}

