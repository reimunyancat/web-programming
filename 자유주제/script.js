let cart = []; // 빈 카트 초기화
let total = 0; // 총 가격 초기화

function addToCart(productName, price) {
    // 카트 배열에 제품 추가
    cart.push({ productName, price });
    
    // 총 가격 업데이트
    total += price;
    
    // 카트 디스플레이 업데이트
    updateCartDisplay();
}

function updateCartDisplay() {
    // cartItems 요소 가져오기
    const cartItemsElement = document.getElementById('cartItems');
    
    // 현재 카트 아이템 클리어
    cartItemsElement.innerHTML = '';
    
    // 각 카트 아이템을 cartItems 요소에 추가
    cart.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.textContent = `${item.productName} - $${item.price}`;
        cartItemsElement.appendChild(itemElement);
    });
    
    // 총 가격 디스플레이 업데이트
    document.getElementById('totalPrice').textContent = total.toFixed(2);
}