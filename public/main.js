const canvas  = document.querySelector('canvas');
const gl= canvas.getContext('webgl');

if(!gl){
    throw new Error('Web GL not supported!');
}


alert('Working WebGL! Great!')