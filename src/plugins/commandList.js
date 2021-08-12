const commandList = {
  experence: {
    description: 'Description of my work experience.',
    messages: [
      { type: 'info', label: 'Shanghai HaiNing Foreign firm', message: '1947-1951 work as Power Supply Engineer and Associate Engineer' },
      { type: 'error', label: 'Changchun First Automobile Works', message: '1956-1959 work as Deputy Director and Factory director ' },
      { type: 'error', label: 'Changchun First Automobile Works', message: '1956-1959 work as Deputy Director and Factory director ' }
    ]
  },
  education: {
    description: 'My education background.',
    messages: [
      { type: 'warning', label: 'Graduate', message: '1943-1945, Major in Electrical Engineering, National Central University ' },
      { type: 'success', label: 'Graduate', message: '1946-1947, Major in Electrical Engineering, Shanghai Jiao Tong University ' }
    ]
  },
  skills: {
    description: 'Return a list of my skills and my rating of them.',
    messages: [
    { message: '- Ukulele(Hawaiian Guitar)     100/100' },
    { message: '- Pianio                       90/100' },
    { message: '- Erhu                         80/100' },
    { message: '- Flute                        70/100' },
    { message: '- Pipe Organ                   60/100' }
    ]
  },
  project: {
    description: 'Return a list of project participate/create.',
    messages: [
      { message: {
        text: 'A terminal emulator in Vue.',
        list: [
          'Tech: VueJS + CSS3',
          'Github: https://github.com/dongsuo/vue-terminal-emulator',
          'Online: https://dongsuo.github.io/vue-terminal-emulator/'
        ]
      }
      }
    ]
  },
  languages: {
    description: 'Return a list of languages that I\'m good at.',
    messages: [
    { message: 'English' },
    { message: 'Russian' },
    { message: 'Japanese' },
    { message: 'French' },
    { message: 'German' },
    { message: 'Spanish' }
    ]
  },
  contact: {
    description: 'How to contact me',
    messages: [
    { type: 'error', label: 'Email', message: 'xuxiaofei915@gmail.com' },
    { type: 'info', label: 'Github', message: 'https://github.com/dongsuo' },
    { type: 'success', label: 'WeChat Offical Account', message: 'dongsuo' }
    ] },
  about: {
    description: 'About author',
    messages: [
    { message: 'My name is xu xiaofei. I\'m a programmer, You can visit my personal website at http://xiaofeixu.cn to learn more about me.' }
    ]
  }
}
export default commandList
