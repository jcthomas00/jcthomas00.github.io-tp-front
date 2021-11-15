//talk to sassybot
const talkToBot = async(message) => {
    var options = {
        method: 'GET',
        url: 'https://acobot-brainshop-ai-v1.p.rapidapi.com/get',
        params: {bid: '178', 
          key: 'sX5A2PcYZbsN5EY6', 
          uid: 'mashape', 
          msg: message},
        headers: {
          'x-rapidapi-host': 'acobot-brainshop-ai-v1.p.rapidapi.com',
          'x-rapidapi-key': 'iWZLmUjilamshMIZ2BzSutl9KfyTp1GodFRjsn6q6oXIlZRVHD'
        }
      };
            
      let response = await axios.request(options);
      return response.data.cnt;
}

//global variables  #sorryChase
let sassyText = [],
form = document.querySelector('form'),
input = form.querySelector('input'),
output = document.querySelector('.sassy-response');

//event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage(input.value);
    input.value = '';
})

//main calls
const sendMessage = async (message) => {
    sassyText.push(message)
    let sassyReturn = await talkToBot(message);
    sassyText.push(sassyReturn)
    render();
}

const render = () => {
    output.innerHTML = sassyText.map((val, i) => {
        if(i%2 === 0){
            return `<p class="input">${val}</p>`
        }
        return `<p class="output">${val}</p>`
    }).join('')

    //scroll to bottom stolen from: https://stackoverflow.com/questions/270612/scroll-to-bottom-of-div
    output.scrollTop = output.scrollHeight;
}