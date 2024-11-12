var wms_layers = [];


        var lyr_ESRISatelital_0 = new ol.layer.Tile({
            'title': 'ESRI Satelital',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_456936EscalanteGeorreferenciada_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "4569-36 Escalante -Georreferenciada",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/456936EscalanteGeorreferenciada_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7572644.944735, -5795533.634856, -7504268.700041, -5719718.482158]
                            })
                        });
var lyr_Reproyectada_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Reproyectada",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Reproyectada_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7625733.809925, -5780883.042672, -7569074.061213, -5726554.119388]
                            })
                        });
var lyr_456936PsoudocolorMonobanda_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "4569-36 (Psoudocolor Monobanda)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/456936PsoudocolorMonobanda_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7569752.318702, -5780381.941679, -7514042.318702, -5727076.866234]
                            })
                        });
var lyr_456631GrisMonobanda_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "4566-31 Gris Monobanda",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/456631GrisMonobanda_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7514072.318702, -5780381.941679, -7458392.318702, -5727076.866234]
                            })
                        });
var lyr_456934MapadesombrasHillshade_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "4569-34 Mapa de sombras (Hillshade)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/456934MapadesombrasHillshade_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7681052.318702, -5780381.941679, -7625372.318702, -5727076.866234]
                            })
                        });
var format_Chubut_6 = new ol.format.GeoJSON();
var features_Chubut_6 = format_Chubut_6.readFeatures(json_Chubut_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chubut_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chubut_6.addFeatures(features_Chubut_6);
var lyr_Chubut_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chubut_6, 
                style: style_Chubut_6,
                popuplayertitle: "Chubut",
                interactive: true,
                title: '<img src="styles/legend/Chubut_6.png" /> Chubut'
            });
var format_DptoChubut_7 = new ol.format.GeoJSON();
var features_DptoChubut_7 = format_DptoChubut_7.readFeatures(json_DptoChubut_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DptoChubut_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DptoChubut_7.addFeatures(features_DptoChubut_7);
var lyr_DptoChubut_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DptoChubut_7, 
                style: style_DptoChubut_7,
                popuplayertitle: "Dpto Chubut",
                interactive: true,
                title: '<img src="styles/legend/DptoChubut_7.png" /> Dpto Chubut'
            });
var format_Redvial_8 = new ol.format.GeoJSON();
var features_Redvial_8 = format_Redvial_8.readFeatures(json_Redvial_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redvial_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redvial_8.addFeatures(features_Redvial_8);
var lyr_Redvial_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Redvial_8, 
                style: style_Redvial_8,
                popuplayertitle: "Red vial ",
                interactive: true,
                title: '<img src="styles/legend/Redvial_8.png" /> Red vial '
            });
var format_Recorrido_9 = new ol.format.GeoJSON();
var features_Recorrido_9 = format_Recorrido_9.readFeatures(json_Recorrido_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recorrido_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recorrido_9.addFeatures(features_Recorrido_9);
var lyr_Recorrido_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Recorrido_9, 
                style: style_Recorrido_9,
                popuplayertitle: "Recorrido",
                interactive: true,
                title: '<img src="styles/legend/Recorrido_9.png" /> Recorrido'
            });
var format_Puntosdeinteres_10 = new ol.format.GeoJSON();
var features_Puntosdeinteres_10 = format_Puntosdeinteres_10.readFeatures(json_Puntosdeinteres_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosdeinteres_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosdeinteres_10.addFeatures(features_Puntosdeinteres_10);
var lyr_Puntosdeinteres_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntosdeinteres_10, 
                style: style_Puntosdeinteres_10,
                popuplayertitle: "Puntos de interes",
                interactive: true,
    title: 'Puntos de interes<br />\
    <img src="styles/legend/Puntosdeinteres_10_0.png" /> Agroproductivo<br />\
    <img src="styles/legend/Puntosdeinteres_10_1.png" /> Comunicaciones<br />\
    <img src="styles/legend/Puntosdeinteres_10_2.png" /> Estructura<br />\
    <img src="styles/legend/Puntosdeinteres_10_3.png" /> Otro<br />\
    <img src="styles/legend/Puntosdeinteres_10_4.png" /> Petrolio<br />\
    <img src="styles/legend/Puntosdeinteres_10_5.png" /> Ruinas del Ferrocarril<br />\
    <img src="styles/legend/Puntosdeinteres_10_6.png" /> Vial<br />\
    <img src="styles/legend/Puntosdeinteres_10_7.png" /> Petróleo<br />'
        });

lyr_ESRISatelital_0.setVisible(true);lyr_456936EscalanteGeorreferenciada_1.setVisible(true);lyr_Reproyectada_2.setVisible(true);lyr_456936PsoudocolorMonobanda_3.setVisible(true);lyr_456631GrisMonobanda_4.setVisible(true);lyr_456934MapadesombrasHillshade_5.setVisible(true);lyr_Chubut_6.setVisible(true);lyr_DptoChubut_7.setVisible(true);lyr_Redvial_8.setVisible(true);lyr_Recorrido_9.setVisible(true);lyr_Puntosdeinteres_10.setVisible(true);
var layersList = [lyr_ESRISatelital_0,lyr_456936EscalanteGeorreferenciada_1,lyr_Reproyectada_2,lyr_456936PsoudocolorMonobanda_3,lyr_456631GrisMonobanda_4,lyr_456934MapadesombrasHillshade_5,lyr_Chubut_6,lyr_DptoChubut_7,lyr_Redvial_8,lyr_Recorrido_9,lyr_Puntosdeinteres_10];
lyr_Chubut_6.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'entidad': 'entidad', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_DptoChubut_7.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_Redvial_8.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'rtn': 'rtn', 'typ': 'typ', 'rst': 'rst', 'hct': 'hct', 'fdc': 'fdc', 'sag': 'sag', });
lyr_Recorrido_9.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_Puntosdeinteres_10.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'TIPO': 'TIPO', });
lyr_Chubut_6.set('fieldImages', {'fid': 'TextEdit', 'gid': 'Range', 'entidad': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_DptoChubut_7.set('fieldImages', {'fid': 'TextEdit', 'gid': 'Range', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_Redvial_8.set('fieldImages', {'fid': 'TextEdit', 'gid': 'Range', 'rtn': 'TextEdit', 'typ': 'Range', 'rst': 'Range', 'hct': 'Range', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_Recorrido_9.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_Puntosdeinteres_10.set('fieldImages', {'fid': 'TextEdit', 'ele': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_Chubut_6.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'entidad': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_DptoChubut_7.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_Redvial_8.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'rtn': 'no label', 'typ': 'no label', 'rst': 'no label', 'hct': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_Recorrido_9.set('fieldLabels', {'fid': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_Puntosdeinteres_10.set('fieldLabels', {'fid': 'inline label - always visible', 'ele': 'inline label - always visible', 'name': 'inline label - always visible', 'cmt': 'inline label - always visible', 'desc': 'inline label - always visible', 'TIPO': 'no label', });
lyr_Puntosdeinteres_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});