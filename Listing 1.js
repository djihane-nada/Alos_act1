JG.repeat(100, 100, {
  id: JG.objectId(),
  from: JG.integer(1, 30),
  to: JG.integer(10, 30),
  totale: JG.integer(300, 300000),
  currentPage:JG.integer(1,1000),
  totalPages:JG.integer(31,40000),
 
  products : {
    name_product : JG.lastName(),
    sku: JG.integer(1000, 9000),
    salePrice: JG.floating(1.00, 90.0),
    
    
    
  },
    store: {
    name :JG.lastName(),
    store_id:  JG.objectId(),
    city:JG.city(),
    storeTyp: _.uniq(JG.repeat(1, JG.random('Express Kiosk', 'Big Box', 'Big_Box_Store'))),  
    
    
    
  },
});
