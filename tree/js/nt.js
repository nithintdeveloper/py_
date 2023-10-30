var apis = {"predefined": [
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
                 {
                     "apiId": 200,
                     "api": "API200",
                     "family": "Other",
                     "isDefault": true
                 },
                 {
                     "apiId": 201,
                     "api": "API202",
                     "family": "Other",
                     "isDefault": true
                 },
                 {
                     "apiId": 202,
                     "api": "API202",
                     "family": "Other",
                     "isDefault": true
                 },

             ],
                 "selectedApis": [101,104]
             };
var selectedApiIds = apis.selectedApis; // save these ids in the db
$(document).ready(function() {
    pageRefresh();
     $('#add_apis').click(function(){
         if (selectedApiIds.length < apis.selectedApis.length) {
            selectedApiIds = apis.selectedApis; // update only when the button is clicked
            pageRefresh();
         }
      });
      $('#remove_apis').click(function(){
               if (selectedApiIds.length > apis.selectedApis.length) {
                  selectedApiIds = apis.selectedApis; // update only when the button is clicked
                  pageRefresh();
               }
            });

});



function pageRefresh(){
    $('#leftbox_select').empty()
    $('#rightbox_select').empty()
    $("div.tree-multiselect").remove();
    $.each(apis.predefined, function (i) {
                   //var selected = apis.selectedApis.includes(apis.predefined[i].apiId) ? "selected" : "";
                   var selected = apis.selectedApis.includes(apis.predefined[i].apiId) ? true : false;
                   //$('#leftbox_select').append("<option value="+apis.predefined[i].apiId+" data-section="+apis.predefined[i].family+" "+selected+" data-index='1'>"+apis.predefined[i].api+"</option>");
                   if (selected){
                         $('#rightbox_select').append("<option value="+apis.predefined[i].apiId+" data-section="+apis.predefined[i].family+"  data-index='1'>"+apis.predefined[i].api+"</option>");
                   }
                   else {
                          $('#leftbox_select').append("<option value="+apis.predefined[i].apiId+" data-section="+apis.predefined[i].family+" data-index='1'>"+apis.predefined[i].api+"</option>");
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

