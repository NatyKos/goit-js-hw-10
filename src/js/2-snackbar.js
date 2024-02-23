import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form')

form.addEventListener('submit', handleCreate);

function handleCreate(event) {
    event.preventDefault();
    const dataDelay = event.target.elements.delay.value;
    const ratioBnt = event.target.elements.state.value;
    
    function createNotification(dataDelay) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (ratioBnt === 'fulfilled') {
                    res(`✅ Fulfilled promise in ${dataDelay}ms`);
                } else {
                    rej(`❌ Rejected promise in ${dataDelay}ms`)
                }
            }, dataDelay)
        })
    };
    
    createNotification(dataDelay)
        .then(value => {
            iziToast.show({
                message: `${value}`,
                messageColor: '#ffffff',
                backgroundColor: '#65B741',
                position: 'topRight',
                progressBarColor: '#ffffff',
                timeout: 3000,
                close: false
            
            })
        })
        .catch (error => {
            iziToast.show({
                message: `${error}`,
                messageColor: '#ffffff',
                backgroundColor: '#FF6868',
                position: 'topRight',
                progressBarColor: '#ffffff',
                timeout: 3000,
                close: false
            })
    })  
};