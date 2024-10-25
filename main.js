/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);


/**part 1: 7 */

document.getElementById("rec_pris_vol").addEventListener("click",rect_prism_volume )

document.getElementById("rect_prism_area").addEventListener("click",rect_prim_area )


/**part 1: 9 */

document.getElementById("sphere_area").addEventListener("click", sphere_area )

document.getElementById("sphere_vol").addEventListener("click", sphere_volume )



/**part1: 11 */


document.getElementById("slope").addEventListener("click", slope_cal )

document.getElementById("Length").addEventListener("click", length_cal )



/*** Functions ***/


/**part 1: 4. */
// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    let d = Number(document.getElementById("rounding").value)
    let c = round(value, d)
    return c

}



// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

    let y = ((a)*x**2) + (b*x) + c

    return y

}



// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {

    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)
   
    let answer =  ((-1*b + (b**2 - 4*a*c)) / (2*a))
    
    document.getElementById("quadratic_output").textContent = `${answer}`

}

// (-b±√(b²-4ac))/(2a)



// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)

    let h = -1 *(b/2*a)
 
    let ver = (a*(b-h)**2 + b)

    document.getElementById("quadratic_output").textContent = `${ver}`

}





/**part 1: 1. */
function delta(a, b) {
    let c = a - b
    return c
}


/**part 1: 2. */
function slope(x1, y1, x2, y2) {
    let m = delta(y2, y1) / delta(x2, x1)
    return m
}


/**part 1: 3. */
function average(n1,n2) {
    let ave = (n1 + n2) / 2
    return ave
}


/**part 1: 5. */
function length(x1, y1, x2, y2) {
    let l = Math.sqrt((delta(y2, y1))**2 + (delta(x2, x1))**2)
    return l
}


/**part 1: 7 */

function rect_prism_volume(){
    let l = Number(document.getElementById("length").value)
    let w = Number(document.getElementById("width").value)
    let h = Number(document.getElementById("height").value)
   
    let volume = (l*w*h)

    document.getElementById("rec_vol_ans").textContent = `${volume}`
}



/**part 1: 8 */

function rect_prim_area() {
    let l = Number(document.getElementById("length").value)
    let w = Number(document.getElementById("width").value)
    let h = Number(document.getElementById("height").value)
   
    let volume = (2*((w*l)+(h*l)+(w*h)))
    
    document.getElementById("rec_area_ans").textContent = `${volume}`


}




/**part 1: 9 */

function sphere_volume() {
    let r = Number(document.getElementById("radius").value)

    let volume = (((4/3)*Math.PI)*Math.pow(r, 3))

    document.getElementById("sphere_vol_ans").textContent = `${volume}`
}


function sphere_area() {
    let r = Number(document.getElementById("radius").value)

    let volume = ((4*Math.PI)*Math.pow(r, 2))

    document.getElementById("sphere_vol_ans").textContent = `${volume}`
}


/**part 1: 11 */

function slope_cal() {
    let x2 = Number(document.getElementById("x2").value)
    let x1 = Number(document.getElementById("x1").value)
    let y2 = Number(document.getElementById("y2").value)
    let y1 = Number(document.getElementById("y1").value)

    let d = Number(document.getElementById("rounding").value)
    
    let m = round(delta(y2, y1) / delta(x2, x1), d)

    document.getElementById("slope_ans").textContent = `${m}`
}

function length_cal() {

}















