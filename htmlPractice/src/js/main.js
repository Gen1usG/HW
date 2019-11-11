// gallery
$('.content-item li').on('click', function () {
    let index = $('.content-item li').index(this)
    console.log(index)
    let theId = '#popup-list-' + (index + 1)
    console.log(theId)
    $('.popup').addClass('popup-show')
    $(theId).addClass('popup-list-show')
})

$('.close-button').on('click', function () {
    $('.popup').removeClass('popup-show')
    $('.popup-list').removeClass('popup-list-show')
})

// article in the right of human photo
$('.pf-pic').on('mouseenter', function () {
    let temp = $('.pf-pic').get($('.pf-pic').index(this))
    $(temp).next().fadeTo(400, 1)
})

$('.pf-pic').on('mouseleave', function () {
    let temp = $('.pf-pic').get($('.pf-pic').index(this))
    $(temp).next().fadeTo(400, 0)
})

// title animation
let headerTextRender = () => {
    let text = 'Welcome to the Mars'
    let actualText = ''
    let index = 0
    function rendering() {
        setTimeout(() => {
            actualText += text[index]
            index += 1
            $('.header-text').text(actualText)
            if (index < text.length) {
                rendering()
            }
        }, 200)
    }
    rendering()
}
headerTextRender()

// second carousel
let carousel = () => {
    index = 0
    $('.arrowleft').on('click', function () {
        if (index === 0) {
            index = $('.carousel img').length - 1
        } else {
            index--
        }
        $('.carousel img').fadeOut().eq(index).fadeIn()

    })

    $('.arrowright').on('click', () => {
        if (index === $('.carousel img').length - 1) {
            index = 0
        } else {
            index++
        }
        $('.carousel img').fadeOut().eq(index).fadeIn()

    })
}
carousel()

// video
const videolist = [
    {
        id: 0,
        url: 'video/Mars.mp4'
    },
    {
        id: 1,
        url: 'video/MarsRunning.mp4'
    },
    {
        id: 2,
        url: 'video/RocketLaunch.mp4'
    },
    {
        id: 3,
        url: 'video/RiceField.mp4'
    },
    {
        id: 4,
        url: 'video/Chicken.mp4'
    }
]
$('.video-list-item').on('click', function () {

    let index = $('.video-list-item').index(this)
    $('.video-contain video').attr('src', `${videolist[index].url}`).attr('autoplay', 'true')
    $('.video-list-item').removeClass('video-list-item-clicked')
    $(this).addClass('video-list-item-clicked')
})

// activity
$('.ac-pic-list li').on('click', function () {
    let index = $('.ac-pic-list li').index(this)
    $('.ac-stage div').eq(index).fadeIn('slow').siblings().fadeOut('fast')
})