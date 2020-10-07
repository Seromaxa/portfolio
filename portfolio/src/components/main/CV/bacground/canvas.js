import React, {useRef, useEffect} from 'react'





const Canvas = props =>{

const canv = useRef(null)


function drawing(activator){
    const canvas = canv.current
    const context = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const gradientBack = context.createLinearGradient(0,0,canvas.width,canvas.height)
    gradientBack.addColorStop(0, "#140036")
    gradientBack.addColorStop(1, "#191C75")
    context.fillStyle = gradientBack
    context.fillRect(0,0,canvas.width,canvas.height)
    const arrCircles = []

    const circle = {
        x: 0,
        y: 0,
        r: 0,
        bconer: 0,
       
        growing: true,
        draw() {
            const gradient1 = context.createLinearGradient(0, 0, canvas.width, canvas.height)
            gradient1.addColorStop(0, "#DEF518")
            gradient1.addColorStop(.5, '#F52618')
            gradient1.addColorStop(1, '#007AF5')
            context.beginPath()
            context.arc(this.x, this.y, this.r, this.bconer, this.r * 2)
            context.fillStyle = gradient1
            context.fill()
            this.grow()
            
        },
        grow() {
            if (this.growing === true) { this.r += 1 }
        },
        edgeDetect() {
            return (this.x + this.r > canvas.width || this.x - this.r < 0 ||
                this.y + this.r > canvas.height || this.y - this.r < 0 )
        }
    
    }
    function dist (Xa,Ya,Xb,Yb){
     return Math.sqrt(Math.pow((Xb-Xa),2)+Math.pow((Yb-Ya),2))
    }

    function fillArr(arr){
        let x = Math.random()* canvas.width
        let y =  Math.random() * canvas.height
        let validCircle = true;

        arr.map(item=>{
            let distBetween = dist(x,y,item.x,item.y)
            if(distBetween < item.r){
                validCircle = false
            } 
            return item
        })
        if(validCircle){
            let newCercle = {...circle}
            newCercle.x = x
            newCercle.y = y
            arr.push(newCercle)
        }
        return arr
    }
  
    function onDrawing(){
        let totalCPS = 4
        let count = 0
        while(count<totalCPS){
            fillArr(arrCircles)
            count++
        }
        arrCircles.map(item1=>{
            if(item1.growing){
                if(!!item1.edgeDetect()){
                    item1.growing = false
                }else{
                    arrCircles.map(item2=>{
                         if(item1 !== item2){
                             let dist1 = dist(item1.x,item1.y,item2.x,item2.y)
                             if(dist1 - 2 < item1.r + item2.r){
                                 item1.growing = false
                             }
                         }
                         return item1
                    })
                }
            }
            item1.draw()
            return item1
        })
        
    }

    function rendering(){
    
    
            onDrawing()

    
        activator = window.requestAnimationFrame(rendering)
        
    
    }
    rendering()
 
}





useEffect(()=>{
let activ 
    drawing(activ)
return ()=>{
    window.cancelAnimationFrame(activ)
}
    
},[])



    return(
        
        <canvas ref={canv} className='bacground'>You browser can't show pawer of canvas</canvas>
          
    
    )
}



export default Canvas