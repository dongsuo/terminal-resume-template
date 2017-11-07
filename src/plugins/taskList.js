const selfIntroduction = [
  // { type: 'prompt', message: 'cd xu\'sresume' },
    { message: 'Thanks for your visiting, here is my resume, let me introduce myself first.' },
    { time: new Date().toLocaleTimeString(), type: 'info', label: 'Name:', message: 'Elder J ' },
    { time: new Date().toLocaleTimeString(), type: 'info', label: 'Apply For:', message: 'Professor' },
    { time: new Date().toLocaleTimeString(), type: 'info', label: 'School:', message: 'National Central University & Shanghai Jiao Tong University' },
    { time: new Date().toLocaleTimeString(), type: 'info', label: 'Diploma:', message: 'Graduate' },
    { time: new Date().toLocaleTimeString(), type: 'info', label: 'Major:', message: 'Electrical Engineering' },
    { time: new Date().toLocaleTimeString(), type: 'info', label: 'Age:', message: '91' },
    { time: new Date().toLocaleTimeString(), type: 'info', label: 'Sex:', message: 'Male' },
  { time: new Date().toLocaleTimeString(),
    type: 'info', label: 'Experence:',
    message: {
      text: 'Here is my work experence:',
      list: [
        '1947-1951 work as Power Supply Engineer and Associate Engineer in Shanghai HaiNing Foreign firm;',
        '1956-1959 work as Deputy Director and Factory director in Changchun First Automobile Works.'
      ]
    }
  }
]

export default {
  selfIntroduct: {
    description: 'Introducting myself.',
    selfIntroduct(pushToList) {
      let i = 0;
      const p = new Promise(resolve => {
        const interval = setInterval(() => {
          pushToList(selfIntroduction[i]);
          i++
          if (!selfIntroduction[i]) {
            clearInterval(interval)
            resolve({ type: 'success', label: 'Done', message: 'My self introduction is over!' })
          }
        }, 1000);
      })
      return p
    }
  },
  open: {
    description: 'Open a specified url in a new tab.',
    open(pushToList, input) {
      const p = new Promise((resolve, reject) => {
        let url = input.split(' ')[1]
        if (!url) {
          reject({ type: 'error', message: 'a url is required!' })
          return
        }
        pushToList({ type: 'success', label: 'Success', message: 'Page Opening' })

        if (input.split(' ')[1].indexOf('http') === -1) {
          url = 'http://' + input.split(' ')[1]
        }
        window.open(url, '_blank')
        resolve({ type: 'success', label: 'Success', message: 'Page Opened!' })
      })
      return p;
    }
  }

}