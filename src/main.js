const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

class keyboard {
    constructor($input) {
        this.$input = $input
        this.text = ''
        this.init()
        this.bind()
    }

    setPage(name) {
        this.$keyboard.querySelectorAll('.page').forEach($page => $page.style.display = 'none')
        this.$keyboard.querySelector('.page-' + name).style.display = 'block'
    }

    bind() {
        let self = this
        this.$input.onclick = function (e) {
            this.classList.add('focus')
            self.$keyboard.classList.add('show')
            e.stopPropagation()
        }
        // onclick 会覆盖上一次绑定
        document.addEventListener('click', function () {
            self.$input.classList.remove('focus')
            self.$keyboard.classList.remove('show')
        })

        this.$keyboard.onclick = function (e) {
            e.stopPropagation()
        }

        // this.keyboard.querySelectorAll('.row>span').forEach($key => {
        //     $key.onmousedown = function () {
        //         this.classList.add('active')
        //     }
        //     $key.onmouseup = function () {
        //         this.classList.remove('active')
        //     }
        // })

        this.$keyboard.querySelectorAll('.row>span').forEach($key => {
            $key.onclick = function (e) {
                $key.onmousedown = function () {
                    this.classList.add('active')
                }
                $key.onmouseup = function () {
                    this.classList.remove('active')
                }
                let type = $key.dataset.type
                switch (type) {
                    case 'char':
                        self.text += $key.innerText
                        self.$input.innerText = self.text
                        break;
                    case 'uppercase':
                        self.setPage('uppercase')
                        break;
                    case 'lowercase':
                        self.setPage('lowercase')
                        break;
                    case 'symbol':
                        self.setPage('symbol')
                        break;
                    case 'number':
                        self.setPage('number')
                        break;
                    case 'backspace':
                        self.text = self.text.substring(0, self.text.length - 1)
                        self.$input.innerText = self.text
                        break;
                    case 'space':
                        self.text += ' '
                        self.$input.innerText = self.text
                        break;
                    case 'return':
                        self.text += '\n'
                        self.$input.innerText = self.text
                        break;
                }
            }
        })
    }

    init() {
        let $keyboard = document.createElement('div')
        $keyboard.classList.add('keyboard')
        $keyboard.innerHTML = `
            <div class="page page-lowercase">
                <div class="row">
                    <span data-type="char" class="col-2">q</span>
                    <span data-type="char" class="col-2">w</span>
                    <span data-type="char" class="col-2">e</span>
                    <span data-type="char" class="col-2">r</span>
                    <span data-type="char" class="col-2">t</span>
                    <span data-type="char" class="col-2">y</span>
                    <span data-type="char" class="col-2">u</span>
                    <span data-type="char" class="col-2">i</span>
                    <span data-type="char" class="col-2">o</span>
                    <span data-type="char" class="col-2">p</span>
                </div>
                <div class="row">
                    <span data-type="char" class="col-2 offset-1">a</span>
                    <span data-type="char" class="col-2">s</span>
                    <span data-type="char" class="col-2">d</span>
                    <span data-type="char" class="col-2">f</span>
                    <span data-type="char" class="col-2">g</span>
                    <span data-type="char" class="col-2">h</span>
                    <span data-type="char" class="col-2">j</span>
                    <span data-type="char" class="col-2">k</span>
                    <span data-type="char" class="col-2">l</span>
                </div>
                <div class="row">
                    <span data-type="uppercase" class="col-3">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-caps-lock-16"></use>
                        </svg>
                    </span>
                    <span data-type="char" class="col-2">z</span>
                    <span data-type="char" class="col-2">x</span>
                    <span data-type="char" class="col-2">c</span>
                    <span data-type="char" class="col-2">v</span>
                    <span data-type="char" class="col-2">b</span>
                    <span data-type="char" class="col-2">n</span>
                    <span data-type="char" class="col-2">m</span>
                    <span data-type="backspace" class="col-3 ">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-backspace"></use>
                        </svg>
                    </span>
                </div>
                <div class="row">
                    <span data-type="number" class="col-4">123</span>
                    <span data-type="space" class="col-12">space</span>
                    <span data-type="return" class="col-4">return</span>
                </div>
            </div>
            <div class="page page-number">
                <div class="row">
                    <span data-type="char" class="col-2">1</span>
                    <span data-type="char" class="col-2">2</span>
                    <span data-type="char" class="col-2">3</span>
                    <span data-type="char" class="col-2">4</span>
                    <span data-type="char" class="col-2">5</span>
                    <span data-type="char" class="col-2">6</span>
                    <span data-type="char" class="col-2">7</span>
                    <span data-type="char" class="col-2">8</span>
                    <span data-type="char" class="col-2">9</span>
                    <span data-type="char" class="col-2">0</span>
                </div>
                <div class="row">
                    <span data-type="char" class="col-2 offset-1">-</span>
                    <span data-type="char" class="col-2">/</span>
                    <span data-type="char" class="col-2">:</span>
                    <span data-type="char" class="col-2">;</span>
                    <span data-type="char" class="col-2">(</span>
                    <span data-type="char" class="col-2">)</span>
                    <span data-type="char" class="col-2">$</span>
                    <span data-type="char" class="col-2">&</span>
                    <span data-type="char" class="col-2">@</span>
                </div>
                <div class="row">
                    <span data-type="symbol" class="col-3">#+=</span>
                    <span data-type="char" class="col-2">.</span>
                    <span data-type="char" class="col-2">,</span>
                    <span data-type="char" class="col-2">?</span>
                    <span data-type="char" class="col-2">!</span>
                    <span data-type="char" class="col-2">'</span>
                    <span data-type="char" class="col-2">"</span>
                    <span data-type="char" class="col-2">\`</span>
                    <span data-type="backspace" class="col-3">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-backspace"></use>
                        </svg>
                    </span>
                </div>
                <div class="row">
                    <span data-type="lowercase" class="col-4">ABC</span>
                    <span data-type="space" class="col-12">space</span>
                    <span data-type="return" class="col-4">return</span>
                </div>
            </div>
            <div class="page page-symbol">
                <div class="row">
                    <span data-type="char" class="col-2">[</span>
                    <span data-type="char" class="col-2">]</span>
                    <span data-type="char" class="col-2">{</span>
                    <span data-type="char" class="col-2">}</span>
                    <span data-type="char" class="col-2">#</span>
                    <span data-type="char" class="col-2">%</span>
                    <span data-type="char" class="col-2">^</span>
                    <span data-type="char" class="col-2">*</span>
                    <span data-type="char" class="col-2">+</span>
                    <span data-type="char" class="col-2">=</span>
                </div>
                <div class="row">
                    <span data-type="char" class="col-2 offset-1">_</span>
                    <span data-type="char" class="col-2">\</span>
                    <span data-type="char" class="col-2">|</span>
                    <span data-type="char" class="col-2">~</span>
                    <span data-type="char" class="col-2">
                        <</span> <span data-type="char" class="col-2">>
                    </span>
                    <span data-type="char" class="col-2">¥</span>
                    <span data-type="char" class="col-2">€</span>
                    <span data-type="char" class="col-2">￡</span>
                </div>
                <div class="row">
                    <span data-type="number" class="col-3">123</span>
                    <span data-type="char" class="col-2">.</span>
                    <span data-type="char" class="col-2">,</span>
                    <span data-type="char" class="col-2">?</span>
                    <span data-type="char" class="col-2">!</span>
                    <span data-type="char" class="col-2">'</span>
                    <span data-type="char" class="col-2">"</span>
                    <span data-type="char" class="col-2">\`</span>
                    <span data-type="backspace" class="col-3">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-backspace"></use>
                        </svg>
                    </span>
                </div>
                <div class="row">
                    <span data-type="lowercase" class="col-4">ABC</span>
                    <span data-type="space" class="col-12">space</span>
                    <span data-type="return" class="col-4">return</span>
                </div>
            </div>
            <div class="page page-uppercase">
                <div class="row">
                    <span data-type="char" class="col-2">Q</span>
                    <span data-type="char" class="col-2">W</span>
                    <span data-type="char" class="col-2">E</span>
                    <span data-type="char" class="col-2">R</span>
                    <span data-type="char" class="col-2">T</span>
                    <span data-type="char" class="col-2">Y</span>
                    <span data-type="char" class="col-2">U</span>
                    <span data-type="char" class="col-2">I</span>
                    <span data-type="char" class="col-2">O</span>
                    <span data-type="char" class="col-2">P</span>
                </div>
                <div class="row">
                    <span data-type="char" class="col-2 offset-1">A</span>
                    <span data-type="char" class="col-2">S</span>
                    <span data-type="char" class="col-2">D</span>
                    <span data-type="char" class="col-2">F</span>
                    <span data-type="char" class="col-2">G</span>
                    <span data-type="char" class="col-2">H</span>
                    <span data-type="char" class="col-2">J</span>
                    <span data-type="char" class="col-2">K</span>
                    <span data-type="char" class="col-2">L</span>
                </div>
                <div class="row">
                    <span data-type="lowercase" class="col-3">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-caps-lock-16"></use>
                        </svg>
                    </span>
                    <span data-type="char" class="col-2">Z</span>
                    <span data-type="char" class="col-2">X</span>
                    <span data-type="char" class="col-2">C</span>
                    <span data-type="char" class="col-2">V</span>
                    <span data-type="char" class="col-2">B</span>
                    <span data-type="char" class="col-2">N</span>
                    <span data-type="char" class="col-2">M</span>
                    <span data-type="backspace" class="col-3">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-backspace"></use>
                        </svg></span>
                </div>
                <div class="row">
                    <span data-type="number" class="col-4">123</span>
                    <span data-type="space" class="col-12">space</span>
                    <span data-type="return" class="col-4">return</span>
                </div>
            </div>
        `
        document.body.appendChild($keyboard)
        this.$keyboard = $keyboard
    }
}

$$('.input').forEach($input => {
    new keyboard($input)
})

















/*
const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

$('.input').onclick = function (e) {
    if (!this.classList.contains('focus')) {
        this.classList.add('focus')
        $('.keyboard').classList.add('show')
        e.stopPropagation()
    }
}

document.onclick = function () {
    $('.keyboard').classList.remove('show')
    $('.input').classList.remove('focus')
}

$('.keyboard').onclick = function (e) {
    e.stopPropagation()
}
let text = ''

$$('.keyboard .row>span').forEach($key => {
    $key.onmousedown = function () {
        this.classList.add('active')
    }
    $key.onmouseup = function () {
        this.classList.remove('active')
    }
})
$$('.keyboard .row>span').forEach($key => {
    $key.onclick = function (e) {
        let type = $key.dataset.type
        switch (type) {
            case 'char':
                text += $key.innerText
                $('.input').innerText = text
                break;
            case 'uppercase':
                setPage('uppercase')
                break;
            case 'lowercase':
                setPage('lowercase')
                break;
            case 'symbol':
                setPage('symbol')
                break;
            case 'number':
                setPage('number')
                break;
            case 'backspace':
                text = text.substring(0, text.length - 1)
                $('.input').innerText = text
                break;
            case 'space':
                text += ''
                $('.input').innerText = text
                break;
            case 'return':
                text += '\n'
                $('.input').innerText = text
                break;
        }
    }
})

function setPage(name) {
    $$('.keyboard .page').forEach($page => $page.style.display = 'none')
    $('.keyboard .page-' + name).style.display = 'block'
}
*/