
    document.addEventListener('DOMContentLoaded', () => {
        const popup = document.getElementById('popup');
        const purchaseModal = document.getElementById('purchaseModal');
        const thankYouModal = document.getElementById('thankYouModal');
        const closeBtn = document.querySelector('.close-btn');
        const openPurchaseModal = document.getElementById('openPurchaseModal');
        const closePurchaseModal = document.getElementById('closePurchaseModal');
        const closeThankYouModal = document.getElementById('closeThankYouModal');
        const finalizeButton = document.getElementById('finalizeButton');
        const purchaseForm = document.getElementById('purchaseForm');

        // Abre el primer modal
        document.getElementById('productLink').addEventListener('click', (event) => {
            event.preventDefault();
            popup.style.display = 'block';
        });

        // Cierra el primer modal
        closeBtn.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        // Abre el segundo modal
        openPurchaseModal.addEventListener('click', () => {
            popup.style.display = 'none';
            purchaseModal.style.display = 'block';
        });

        // Cierra el segundo modal
        closePurchaseModal.addEventListener('click', () => {
            purchaseModal.style.display = 'none';
        });

        // Envía el formulario y muestra el tercer modal
        purchaseForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita el comportamiento predeterminado del formulario
            purchaseModal.style.display = 'none'; // Cierra el segundo modal
            thankYouModal.style.display = 'block'; // Muestra el tercer modal
        });

        // Cierra el tercer modal
        closeThankYouModal.addEventListener('click', () => {
            thankYouModal.style.display = 'none';
        });

        // Finaliza la compra y cierra el tercer modal
        finalizeButton.addEventListener('click', () => {
            thankYouModal.style.display = 'none';
        });

        // Cierra cualquier modal si se hace clic fuera de él
        window.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
            if (event.target === purchaseModal) {
                purchaseModal.style.display = 'none';
            }
            if (event.target === thankYouModal) {
                thankYouModal.style.display = 'none';
            }
        });
    });


  // Código duplicado con sufijo 2

document.addEventListener('DOMContentLoaded', () => {
    const popup2 = document.getElementById('popup2');
    const purchaseModal2 = document.getElementById('purchaseModal2');
    const thankYouModal2 = document.getElementById('thankYouModal2');
    const closeBtn2 = document.querySelector('.close-btn2');
    const openPurchaseModal2 = document.getElementById('openPurchaseModal2');
    const closePurchaseModal2 = document.getElementById('closePurchaseModal2');
    const closeThankYouModal2 = document.getElementById('closeThankYouModal2');
    const finalizeButton2 = document.getElementById('finalizeButton2');
    const purchaseForm2 = document.getElementById('purchaseForm2');

    // Abre el primer modal
    document.getElementById('productLink2').addEventListener('click', (event) => {
        event.preventDefault();
        popup2.style.display = 'block';
    });

    // Cierra el primer modal
    closeBtn2.addEventListener('click', () => {
        popup2.style.display = 'none';
    });

    // Abre el segundo modal
    openPurchaseModal2.addEventListener('click', () => {
        popup2.style.display = 'none';
        purchaseModal2.style.display = 'block';
    });

    // Cierra el segundo modal
    closePurchaseModal2.addEventListener('click', () => {
        purchaseModal2.style.display = 'none';
    });

    // Envía el formulario y muestra el tercer modal
    purchaseForm2.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        purchaseModal2.style.display = 'none'; // Cierra el segundo modal
        thankYouModal2.style.display = 'block'; // Muestra el tercer modal
    });

    // Cierra el tercer modal
    closeThankYouModal2.addEventListener('click', () => {
        thankYouModal2.style.display = 'none';
    });

    // Finaliza la compra y cierra el tercer modal
    finalizeButton2.addEventListener('click', () => {
        thankYouModal2.style.display = 'none';
    });

    // Cierra cualquier modal si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === popup2) {
            popup2.style.display = 'none';
        }
        if (event.target === purchaseModal2) {
            purchaseModal2.style.display = 'none';
        }
        if (event.target === thankYouModal2) {
            thankYouModal2.style.display = 'none';
        }
    });
});



 // Código duplicado con sufijo 3

 document.addEventListener('DOMContentLoaded', () => {
    const popup3 = document.getElementById('popup3');
    const purchaseModal3 = document.getElementById('purchaseModal3');
    const thankYouModal3 = document.getElementById('thankYouModal3');
    const closeBtn3 = document.querySelector('.close-btn3');
    const openPurchaseModal3 = document.getElementById('openPurchaseModal3');
    const closePurchaseModal3 = document.getElementById('closePurchaseModal3');
    const closeThankYouModal3 = document.getElementById('closeThankYouModal3');
    const finalizeButton3 = document.getElementById('finalizeButton3');
    const purchaseForm3 = document.getElementById('purchaseForm3');

    // Abre el primer modal
    document.getElementById('productLink3').addEventListener('click', (event) => {
        event.preventDefault();
        popup3.style.display = 'block';
    });

    // Cierra el primer modal
    closeBtn3.addEventListener('click', () => {
        popup3.style.display = 'none';
    });

    // Abre el segundo modal
    openPurchaseModal3.addEventListener('click', () => {
        popup3.style.display = 'none';
        purchaseModal3.style.display = 'block';
    });

    // Cierra el segundo modal
    closePurchaseModal3.addEventListener('click', () => {
        purchaseModal3.style.display = 'none';
    });

    // Envía el formulario y muestra el tercer modal
    purchaseForm3.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        purchaseModal3.style.display = 'none'; // Cierra el segundo modal
        thankYouModal3.style.display = 'block'; // Muestra el tercer modal
    });

    // Cierra el tercer modal
    closeThankYouModal3.addEventListener('click', () => {
        thankYouModal3.style.display = 'none';
    });

    // Finaliza la compra y cierra el tercer modal
    finalizeButton3.addEventListener('click', () => {
        thankYouModal3.style.display = 'none';
    });

    // Cierra cualquier modal si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === popup3) {
            popup3.style.display = 'none';
        }
        if (event.target === purchaseModal3) {
            purchaseModal3.style.display = 'none';
        }
        if (event.target === thankYouModal3) {
            thankYouModal3.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const popup4 = document.getElementById('popup4');
    const purchaseModal4 = document.getElementById('purchaseModal4');
    const thankYouModal4 = document.getElementById('thankYouModal4');
    const closeBtn4 = document.querySelector('.close-btn4');
    const openPurchaseModal4 = document.getElementById('openPurchaseModal4');
    const closePurchaseModal4 = document.getElementById('closePurchaseModal4');
    const closeThankYouModal4 = document.getElementById('closeThankYouModal4');
    const finalizeButton4 = document.getElementById('finalizeButton4');
    const purchaseForm4 = document.getElementById('purchaseForm4');

    // Abre el primer modal
    document.getElementById('productLink4').addEventListener('click', (event) => {
        event.preventDefault();
        popup4.style.display = 'block';
    });

    // Cierra el primer modal
    closeBtn4.addEventListener('click', () => {
        popup4.style.display = 'none';
    });

    // Abre el segundo modal
    openPurchaseModal4.addEventListener('click', () => {
        popup4.style.display = 'none';
        purchaseModal4.style.display = 'block';
    });

    // Cierra el segundo modal
    closePurchaseModal4.addEventListener('click', () => {
        purchaseModal4.style.display = 'none';
    });

    // Envía el formulario y muestra el tercer modal
    purchaseForm4.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        purchaseModal4.style.display = 'none'; // Cierra el segundo modal
        thankYouModal4.style.display = 'block'; // Muestra el tercer modal
    });

    // Cierra el tercer modal
    closeThankYouModal4.addEventListener('click', () => {
        thankYouModal4.style.display = 'none';
    });

    // Finaliza la compra y cierra el tercer modal
    finalizeButton4.addEventListener('click', () => {
        thankYouModal4.style.display = 'none';
    });

    // Cierra cualquier modal si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === popup4) {
            popup4.style.display = 'none';
        }
        if (event.target === purchaseModal4) {
            purchaseModal4.style.display = 'none';
        }
        if (event.target === thankYouModal4) {
            thankYouModal4.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const popup5 = document.getElementById('popup5');
    const purchaseModal5 = document.getElementById('purchaseModal5');
    const thankYouModal5 = document.getElementById('thankYouModal5');
    const closeBtn5 = document.querySelector('.close-btn5');
    const openPurchaseModal5 = document.getElementById('openPurchaseModal5');
    const closePurchaseModal5 = document.getElementById('closePurchaseModal5');
    const closeThankYouModal5 = document.getElementById('closeThankYouModal5');
    const finalizeButton5 = document.getElementById('finalizeButton5');
    const purchaseForm5 = document.getElementById('purchaseForm5');

    // Abre el primer modal
    document.getElementById('productLink5').addEventListener('click', (event) => {
        event.preventDefault();
        popup5.style.display = 'block';
    });

    // Cierra el primer modal
    closeBtn5.addEventListener('click', () => {
        popup5.style.display = 'none';
    });

    // Abre el segundo modal
    openPurchaseModal5.addEventListener('click', () => {
        popup5.style.display = 'none';
        purchaseModal5.style.display = 'block';
    });

    // Cierra el segundo modal
    closePurchaseModal5.addEventListener('click', () => {
        purchaseModal5.style.display = 'none';
    });

    // Envía el formulario y muestra el tercer modal
    purchaseForm5.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        purchaseModal5.style.display = 'none'; // Cierra el segundo modal
        thankYouModal5.style.display = 'block'; // Muestra el tercer modal
    });

    // Cierra el tercer modal
    closeThankYouModal5.addEventListener('click', () => {
        thankYouModal5.style.display = 'none';
    });

    // Finaliza la compra y cierra el tercer modal
    finalizeButton5.addEventListener('click', () => {
        thankYouModal5.style.display = 'none';
    });

    // Cierra cualquier modal si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === popup5) {
            popup5.style.display = 'none';
        }
        if (event.target === purchaseModal5) {
            purchaseModal5.style.display = 'none';
        }
        if (event.target === thankYouModal5) {
            thankYouModal5.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const popup6 = document.getElementById('popup6');
    const purchaseModal6 = document.getElementById('purchaseModal6');
    const thankYouModal6 = document.getElementById('thankYouModal6');
    const closeBtn6 = document.querySelector('.close-btn6');
    const openPurchaseModal6 = document.getElementById('openPurchaseModal6');
    const closePurchaseModal6 = document.getElementById('closePurchaseModal6');
    const closeThankYouModal6 = document.getElementById('closeThankYouModal6');
    const finalizeButton6 = document.getElementById('finalizeButton6');
    const purchaseForm6 = document.getElementById('purchaseForm6');

    // Abre el primer modal
    document.getElementById('productLink6').addEventListener('click', (event) => {
        event.preventDefault();
        popup6.style.display = 'block';
    });

    // Cierra el primer modal
    closeBtn6.addEventListener('click', () => {
        popup6.style.display = 'none';
    });

    // Abre el segundo modal
    openPurchaseModal6.addEventListener('click', () => {
        popup6.style.display = 'none';
        purchaseModal6.style.display = 'block';
    });

    // Cierra el segundo modal
    closePurchaseModal6.addEventListener('click', () => {
        purchaseModal6.style.display = 'none';
    });

    // Envía el formulario y muestra el tercer modal
    purchaseForm6.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        purchaseModal6.style.display = 'none'; // Cierra el segundo modal
        thankYouModal6.style.display = 'block'; // Muestra el tercer modal
    });

    // Cierra el tercer modal
    closeThankYouModal6.addEventListener('click', () => {
        thankYouModal6.style.display = 'none';
    });

    // Finaliza la compra y cierra el tercer modal
    finalizeButton6.addEventListener('click', () => {
        thankYouModal6.style.display = 'none';
    });

    // Cierra cualquier modal si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === popup6) {
            popup6.style.display = 'none';
        }
        if (event.target === purchaseModal6) {
            purchaseModal6.style.display = 'none';
        }
        if (event.target === thankYouModal6) {
            thankYouModal6.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const popup7 = document.getElementById('popup7');
    const purchaseModal7 = document.getElementById('purchaseModal7');
    const thankYouModal7 = document.getElementById('thankYouModal7');
    const closeBtn7 = document.querySelector('.close-btn7');
    const openPurchaseModal7 = document.getElementById('openPurchaseModal7');
    const closePurchaseModal7 = document.getElementById('closePurchaseModal7');
    const closeThankYouModal7 = document.getElementById('closeThankYouModal7');
    const finalizeButton7 = document.getElementById('finalizeButton7');
    const purchaseForm7 = document.getElementById('purchaseForm7');

    // Abre el primer modal
    document.getElementById('productLink7').addEventListener('click', (event) => {
        event.preventDefault();
        popup7.style.display = 'block';
    });

    // Cierra el primer modal
    closeBtn7.addEventListener('click', () => {
        popup7.style.display = 'none';
    });

    // Abre el segundo modal
    openPurchaseModal7.addEventListener('click', () => {
        popup7.style.display = 'none';
        purchaseModal7.style.display = 'block';
    });

    // Cierra el segundo modal
    closePurchaseModal7.addEventListener('click', () => {
        purchaseModal7.style.display = 'none';
    });

    // Envía el formulario y muestra el tercer modal
    purchaseForm7.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        purchaseModal7.style.display = 'none'; // Cierra el segundo modal
        thankYouModal7.style.display = 'block'; // Muestra el tercer modal
    });

    // Cierra el tercer modal
    closeThankYouModal7.addEventListener('click', () => {
        thankYouModal7.style.display = 'none';
    });

    // Finaliza la compra y cierra el tercer modal
    finalizeButton7.addEventListener('click', () => {
        thankYouModal7.style.display = 'none';
    });

    // Cierra cualquier modal si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === popup7) {
            popup7.style.display = 'none';
        }
        if (event.target === purchaseModal7) {
            purchaseModal7.style.display = 'none';
        }
        if (event.target === thankYouModal7) {
            thankYouModal7.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const popup8 = document.getElementById('popup8');
    const purchaseModal8 = document.getElementById('purchaseModal8');
    const thankYouModal8 = document.getElementById('thankYouModal8');
    const closeBtn8 = document.querySelector('.close-btn8');
    const openPurchaseModal8 = document.getElementById('openPurchaseModal8');
    const closePurchaseModal8 = document.getElementById('closePurchaseModal8');
    const closeThankYouModal8 = document.getElementById('closeThankYouModal8');
    const finalizeButton8 = document.getElementById('finalizeButton8');
    const purchaseForm8 = document.getElementById('purchaseForm8');

    // Abre el primer modal
    document.getElementById('productLink8').addEventListener('click', (event) => {
        event.preventDefault();
        popup8.style.display = 'block';
    });

    // Cierra el primer modal
    closeBtn8.addEventListener('click', () => {
        popup8.style.display = 'none';
    });

    // Abre el segundo modal
    openPurchaseModal8.addEventListener('click', () => {
        popup8.style.display = 'none';
        purchaseModal8.style.display = 'block';
    });

    // Cierra el segundo modal
    closePurchaseModal8.addEventListener('click', () => {
        purchaseModal8.style.display = 'none';
    });

    // Envía el formulario y muestra el tercer modal
    purchaseForm8.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        purchaseModal8.style.display = 'none'; // Cierra el segundo modal
        thankYouModal8.style.display = 'block'; // Muestra el tercer modal
    });

    // Cierra el tercer modal
    closeThankYouModal8.addEventListener('click', () => {
        thankYouModal8.style.display = 'none';
    });

    // Finaliza la compra y cierra el tercer modal
    finalizeButton8.addEventListener('click', () => {
        thankYouModal8.style.display = 'none';
    });

    // Cierra cualquier modal si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === popup8) {
            popup8.style.display = 'none';
        }
        if (event.target === purchaseModal8) {
            purchaseModal8.style.display = 'none';
        }
        if (event.target === thankYouModal8) {
            thankYouModal8.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const popup9 = document.getElementById('popup9');
    const purchaseModal9 = document.getElementById('purchaseModal9');
    const thankYouModal9 = document.getElementById('thankYouModal9');
    const closeBtn9 = document.querySelector('.close-btn9');
    const openPurchaseModal9 = document.getElementById('openPurchaseModal9');
    const closePurchaseModal9 = document.getElementById('closePurchaseModal9');
    const closeThankYouModal9 = document.getElementById('closeThankYouModal9');
    const finalizeButton9 = document.getElementById('finalizeButton9');
    const purchaseForm9 = document.getElementById('purchaseForm9');

    // Abre el primer modal
    document.getElementById('productLink9').addEventListener('click', (event) => {
        event.preventDefault();
        popup9.style.display = 'block';
    });

    // Cierra el primer modal
    closeBtn9.addEventListener('click', () => {
        popup9.style.display = 'none';
    });

    // Abre el segundo modal
    openPurchaseModal9.addEventListener('click', () => {
        popup9.style.display = 'none';
        purchaseModal9.style.display = 'block';
    });

    // Cierra el segundo modal
    closePurchaseModal9.addEventListener('click', () => {
        purchaseModal9.style.display = 'none';
    });

    // Envía el formulario y muestra el tercer modal
    purchaseForm9.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        purchaseModal9.style.display = 'none'; // Cierra el segundo modal
        thankYouModal9.style.display = 'block'; // Muestra el tercer modal
    });

    // Cierra el tercer modal
    closeThankYouModal9.addEventListener('click', () => {
        thankYouModal9.style.display = 'none';
    });

    // Finaliza la compra y cierra el tercer modal
    finalizeButton9.addEventListener('click', () => {
        thankYouModal9.style.display = 'none';
    });

    // Cierra cualquier modal si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === popup9) {
            popup9.style.display = 'none';
        }
        if (event.target === purchaseModal9) {
            purchaseModal9.style.display = 'none';
        }
        if (event.target === thankYouModal9) {
            thankYouModal9.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const popup10 = document.getElementById('popup10');
    const purchaseModal10 = document.getElementById('purchaseModal10');
    const thankYouModal10 = document.getElementById('thankYouModal10');
    const closeBtn10 = document.querySelector('.close-btn10');
    const openPurchaseModal10 = document.getElementById('openPurchaseModal10');
    const closePurchaseModal10 = document.getElementById('closePurchaseModal10');
    const closeThankYouModal10 = document.getElementById('closeThankYouModal10');
    const finalizeButton10 = document.getElementById('finalizeButton10');
    const purchaseForm10 = document.getElementById('purchaseForm10');

    // Abre el primer modal
    document.getElementById('productLink10').addEventListener('click', (event) => {
        event.preventDefault();
        popup10.style.display = 'block';
    });

    // Cierra el primer modal
    closeBtn10.addEventListener('click', () => {
        popup10.style.display = 'none';
    });

    // Abre el segundo modal
    openPurchaseModal10.addEventListener('click', () => {
        popup10.style.display = 'none';
        purchaseModal10.style.display = 'block';
    });

    // Cierra el segundo modal
    closePurchaseModal10.addEventListener('click', () => {
        purchaseModal10.style.display = 'none';
    });

    // Envía el formulario y muestra el tercer modal
    purchaseForm10.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        purchaseModal10.style.display = 'none'; // Cierra el segundo modal
        thankYouModal10.style.display = 'block'; // Muestra el tercer modal
    });

    // Cierra el tercer modal
    closeThankYouModal10.addEventListener('click', () => {
        thankYouModal10.style.display = 'none';
    });

    // Finaliza la compra y cierra el tercer modal
    finalizeButton10.addEventListener('click', () => {
        thankYouModal10.style.display = 'none';
    });

    // Cierra cualquier modal si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === popup10) {
            popup10.style.display = 'none';
        }
        if (event.target === purchaseModal10) {
            purchaseModal10.style.display = 'none';
        }
        if (event.target === thankYouModal10) {
            thankYouModal10.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const popup11 = document.getElementById('popup11');
    const purchaseModal11 = document.getElementById('purchaseModal11');
    const thankYouModal11 = document.getElementById('thankYouModal11');
    const closeBtn11 = document.querySelector('.close-btn11');
    const openPurchaseModal11 = document.getElementById('openPurchaseModal11');
    const closePurchaseModal11 = document.getElementById('closePurchaseModal11');
    const closeThankYouModal11 = document.getElementById('closeThankYouModal11');
    const finalizeButton11 = document.getElementById('finalizeButton11');
    const purchaseForm11 = document.getElementById('purchaseForm11');

    // Abre el primer modal
    document.getElementById('productLink11').addEventListener('click', (event) => {
        event.preventDefault();
        popup11.style.display = 'block';
    });

    // Cierra el primer modal
    closeBtn11.addEventListener('click', () => {
        popup11.style.display = 'none';
    });

    // Abre el segundo modal
    openPurchaseModal11.addEventListener('click', () => {
        popup11.style.display = 'none';
        purchaseModal11.style.display = 'block';
    });

    // Cierra el segundo modal
    closePurchaseModal11.addEventListener('click', () => {
        purchaseModal11.style.display = 'none';
    });

    // Envía el formulario y muestra el tercer modal
    purchaseForm11.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        purchaseModal11.style.display = 'none'; // Cierra el segundo modal
        thankYouModal11.style.display = 'block'; // Muestra el tercer modal
    });

    // Cierra el tercer modal
    closeThankYouModal11.addEventListener('click', () => {
        thankYouModal11.style.display = 'none';
    });

    // Finaliza la compra y cierra el tercer modal
    finalizeButton11.addEventListener('click', () => {
        thankYouModal11.style.display = 'none';
    });

    // Cierra cualquier modal si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === popup11) {
            popup11.style.display = 'none';
        }
        if (event.target === purchaseModal11) {
            purchaseModal11.style.display = 'none';
        }
        if (event.target === thankYouModal11) {
            thankYouModal11.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const popup12 = document.getElementById('popup12');
    const purchaseModal12 = document.getElementById('purchaseModal12');
    const thankYouModal12 = document.getElementById('thankYouModal12');
    const closeBtn12 = document.querySelector('.close-btn12');
    const openPurchaseModal12 = document.getElementById('openPurchaseModal12');
    const closePurchaseModal12 = document.getElementById('closePurchaseModal12');
    const closeThankYouModal12 = document.getElementById('closeThankYouModal12');
    const finalizeButton12 = document.getElementById('finalizeButton12');
    const purchaseForm12 = document.getElementById('purchaseForm12');

    // Abre el primer modal
    document.getElementById('productLink12').addEventListener('click', (event) => {
        event.preventDefault();
        popup12.style.display = 'block';
    });

    // Cierra el primer modal
    closeBtn12.addEventListener('click', () => {
        popup12.style.display = 'none';
    });

    // Abre el segundo modal
    openPurchaseModal12.addEventListener('click', () => {
        popup12.style.display = 'none';
        purchaseModal12.style.display = 'block';
    });

    // Cierra el segundo modal
    closePurchaseModal12.addEventListener('click', () => {
        purchaseModal12.style.display = 'none';
    });

    // Envía el formulario y muestra el tercer modal
    purchaseForm12.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        purchaseModal12.style.display = 'none'; // Cierra el segundo modal
        thankYouModal12.style.display = 'block'; // Muestra el tercer modal
    });

    // Cierra el tercer modal
    closeThankYouModal12.addEventListener('click', () => {
        thankYouModal12.style.display = 'none';
    });

    // Finaliza la compra y cierra el tercer modal
    finalizeButton12.addEventListener('click', () => {
        thankYouModal12.style.display = 'none';
    });

    // Cierra cualquier modal si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === popup12) {
            popup12.style.display = 'none';
        }
        if (event.target === purchaseModal12) {
            purchaseModal12.style.display = 'none';
        }
        if (event.target === thankYouModal12) {
            thankYouModal12.style.display = 'none';
        }
    });
});

