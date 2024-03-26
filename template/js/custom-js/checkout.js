// Add your custom JavaScript for checkout here.
storefront.on('widget:@ecomplus/widget-tag-manager', () => {
    setTimeout(() => {
        if($('#cart').length) {
          if (window.innerWidth < 767) {
            $('.cart__discount').after($('.recommended-items'))
          }
        }
    }, 800);
});