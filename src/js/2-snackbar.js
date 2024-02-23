import iziToast from "izitoast";

const form = document.querySelector('.form')
// const ratioBnt = form.elements.state;

form.addEventListener('submit', handleCreate);

function handleCreate(event) {
    event.preventDefault();
    const dataDelay = event.target.elements.delay.value;
    const ratioBnt = event.target.elements.state.value;
    
    function getValueRatioBtn(dataDelay) {
        return new Promise((res, rej) => {
            if (ratioBnt === 'fulfilled') {
                res(`✅ Fulfilled promise in ${dataDelay}ms`);
            } else {
                rej(`❌ Rejected promise in ${dataDelay}ms`)
            }

        }, dataDelay)
    }
    
    getValueRatioBtn(dataDelay)
        .then(value => {
            iziToast.success({
                message: `${value}`,
                messageColor: '#ffffff',
                backgroundColor: '#65B741',
                position: 'topRight',
                theme: 'dark',
                progressBarColor: '#ffffff',
                timeout: 3000,
                displayMode: '2'
            
            })
        })
        .catch (error => {
            iziToast.error({
                message: `${error}`,
                messageColor: '#ffffff',
                backgroundColor: '#FF6868',
                position: 'topRight',
                theme: 'dark',
                progressBarColor: '#ffffff',
                timeout: 3000,
                displayMode: '2'
            })
    })  
};