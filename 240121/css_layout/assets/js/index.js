Vue.createApp({
    data() {
        return {
            end: '',
            timer: {
                day: '00',
                hour: '00',
                minute: '00',
                second: '00',
            },
        }
    },
    methods: {
        init() {
            setInterval(() => {
                this.update()
            }, 1000)
            this.update()
        },
        update() {
            let end = this.end
            let current = new Date()
            let diff = (end.getTime() - current.getTime()) / 1000
            let day = Math.floor(diff / (60 * 60 * 24))

            diff = diff % (60 * 60 * 24)
            let hour = Math.floor(diff / (60 * 60))

            diff = diff % (60 * 60)
            let minute = Math.floor(diff / 60)
            let second = Math.round(diff % 60)

            this.timer.day = day.toString().padStart(2, '0')
            this.timer.hour = hour.toString().padStart(2, '0')
            this.timer.minute = minute.toString().padStart(2, '0')
            this.timer.second = second.toString().padStart(2, '0')
        },
        initEnd() {
            let d = new Date()
            d.setFullYear(2023)
            d.setMonth(7)
            d.setDate(21)
            d.setHours(23)
            d.setMinutes(59)
            d.setSeconds(59)
            this.end = d
        },
    },
    mounted() {
        this.initEnd()
        this.init()
    },
}).mount('#countdown-component')
