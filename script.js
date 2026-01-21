




const img = document.getElementById('heartImg');

img.addEventListener('mouseenter', () => 
    {
        img.classList.add('heartbeat');
    
    });

img.addEventListener('mouseleave', () => 
    {
        img.classList.remove('heartbeat');
    });




    const PAYSTACK_KEY = 'pk_test_eb207e5b3c1cad5aff800fcc4a4edbb081569cd8'; 
    // Replace with your Paystack public key

    function payForSong(fileName, amount) {
        let handler = PaystackPop.setup({
            key: PAYSTACK_KEY,
            email: 'jbioba@gmail.com',
            amount: amount * 100, // Amount in kobo
            currency: "NGN",
            ref: 'song_' + Date.now(), // Unique reference

            callback: function() {
                sessionStorage.setItem('paid', 'yes');

                sessionStorage.setItem('songFile', fileName);
                window.location.href = 'download-success.html';
            },

            onclose: function() {
                alert('Payment cancelled.');
            }
        });

        handler.openIframe();
    }
            
