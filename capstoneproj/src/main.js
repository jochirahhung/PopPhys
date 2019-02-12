import { tween, colorTween } from 'popmotion';
import { css, svg } from 'popmotion';
import { pointer, trackOffset } from 'popmotion';
import { physics } from 'popmotion';
import { easing } from 'popmotion';
import { Action } from 'popmotion';
import { transform } from 'popmotion';
import { value } from 'popmotion';
import { chain, delay } from 'popmotion';

    var ball = document.querySelector('.ball');
    var ballRenderer = css(ball);
    var box = document.querySelector('.boxTest')
    var boxRenderer = css(box);
    var ball3 = document.querySelector('.ball3');
    var ballRenderer2 = css(ball3);
    var setBallX = (v) => ballRenderer2.set('x', v);

window.doThis = function(num1, num2){
    physics({
        from: 0,
        to: 700,
        velocity: num1,
        friction: num2,
        springStrength: 0,
        flip: Infinity,
        onUpdate: (x) => ballRenderer.set('x', x)
    }).start();
}

window.showHow = function(){
 
chain([
    tween({
        to: 500,
        duration: 3000,
        onUpdate: setBallX
    }),
    delay(400),
    physics({
        from: 500,
        to: 0,
        spring: 500,
        friction: 0.5,
        onUpdate: setBallX
    }),
]).start();
}

window.doThisAgain = function(num3){
    tween({
        from: 0,
        to: 300,
        duration: num3,
        ease: easing.backOut,
        flip: Infinity,
        onUpdate: (x, z) => boxRenderer.set('x', x)
      }).start();
}

window.giveNumbers = function(){
    document.getElementById("num1.1").value = Math.floor((Math.random() * 1000) + 1);

    document.getElementById("num2.1").value = Math.floor((Math.random() * 500) + 1);
    
    document.getElementById("num3.1").value = Math.floor((Math.random() * 24) + 1);
}

window.showAnswer = function(){
    let x = (document.getElementById("num2.1").value * document.getElementById("num3.1").value);
    let y = document.getElementById("num1.1").value;
    document.getElementById("answer1").value = +x + +y;
}

window.giveNumbers2 = function(){
    document.getElementById("num1.2").value = Math.floor((Math.random() * 1000) + 1);

    document.getElementById("num2.2").value = Math.floor((Math.random() * 9) + 1) / 10;
    
}

window.showAnswer2 = function(){
    let x = (document.getElementById("num2.2").value);
    let y = document.getElementById("num1.2").value;
    document.getElementById("answer2").value = +x * +y;
}

window.giveNumbers3 = function(){
    document.getElementById("num1.3").value = Math.floor((Math.random() * 1000) + 1);

    document.getElementById("num2.3").value = Math.floor((Math.random() * 1000) + 1);
    
    document.getElementById("num3.3").value = Math.floor((Math.random() * 100) + 1);
}

window.showAnswer3 = function(){
    let a = document.getElementById("num2.3").value;
    let b = document.getElementById("num1.3").value;
    let x = (+a + +b);
    let y = document.getElementById("num3.3").value * document.getElementById("num3.3").value;
    document.getElementById("answer3").value = +x / +y;
}

window.dropDown = function() {
    document.getElementById("drop").classList.toggle("show");
}

window.dropDown2 = function() {
    document.getElementById("drop2").classList.toggle("show");
}
window.dropDown3 = function() {
    document.getElementById("drop3").classList.toggle("show");
}
window.dropDown4 = function() {
    document.getElementById("drop4").classList.toggle("show");
}
window.dropDown5 = function() {
    document.getElementById("drop5").classList.toggle("show");
}
window.dropDown6 = function() {
    document.getElementById("drop6").classList.toggle("show");
}
window.dropDown7 = function() {
    document.getElementById("drop7").classList.toggle("show");
}
window.dropDown8 = function() {
    document.getElementById("drop8").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.show1 = function(){
    document.getElementById("sectionName1").innerHTML = " Mechanics and Motion:";
    document.getElementById("reading1").innerHTML = "Motion is one of the key topics in physics. Everything in the universe moves. It might only be a small amount of movement and very, very slow, but movement does happen. Don't forget that even if you appear to be standing still, the Earth is moving around the Sun, and the Sun is moving around our galaxy. The movement never stops. Motion is one part of what physicists call mechanics. Over the years, scientists have discovered several rules or laws that explain motion and the causes of changes in motion. There are also special laws when you reach the speed of light or when physicists look at very small things like atoms. The physics of motion is all about forces. Forces need to act upon an object to get it moving, or to change its motion. Changes in motion won't just happen on their own. So how is all of this motion measured? Physicists use some basic terms when they look at motion. How fast an object moves, its speed or Velocity, can be influenced by forces. (Note: Even though the terms 'speed' and 'velocity' are often used at the same time, they actually have different meanings.). Acceleration is a twist on the idea of velocity. Acceleration is a measure of how much the velocity of an object changes in a certain time (usually in one second). Velocities could either increase or decrease over time. Mass is another big idea in motion. Mass is the amount of something there is and is measured in grams (or kilograms). A car has a greater mass than a baseball. There are two main ideas when you study mechanics. The first idea is that there are simple movements, such as if you're moving in a straight line, or if two objects are moving towards each other in a straight line. The simplest movement would be objects moving at constant velocity. Slightly more complicated studies would look at objects that speed up or slow down, where forces have to be acting. There are also more complex movements when an object's direction is changing. These would involve curved movements such as circular motion, or the motion of a ball being thrown through the air. For such complex motions to occur, forces must also be acting, but at angles to the movement. In order to really understand motion, you have to think about forces, acceleration, energy, work, and mass. These are all a part of mechanics. The physics of motion is all about forces. Forces need to act upon an object to get it moving, or to change its motion. Changes in motion won't just happen on their own. So how is all of this motion measured? Physicists use some basic terms when they look at motion. How fast an object moves, its speed or Velocity, can be influenced by forces. (Note: Even though the terms 'speed' and 'velocity' are often used at the same time, they actually have different meanings.) Acceleration is a twist on the idea of velocity. Acceleration is a measure of how much the velocity of an object changes in a certain time (usually in one second). Velocities could either increase or decrease over time. Mass is another big idea in motion. Mass is the amount of something there is, and is measured in grams (or kilograms). A car has a greater mass than a baseball. ";
}

window.show2 = function(){
    document.getElementById("sectionName1").innerHTML = "Forces of Nature:  ";
    document.getElementById("reading1").innerHTML = "Forces are a big part of physics. Physicists devote a lot of time to the study of forces that are found everywhere in the universe. The forces could be big, such as the pull of a star on a planet. The forces could also be very small, such as the pull of a nucleus on an electron. Forces are acting everywhere in the universe at all times.";
}

window.show3 = function(){
    document.getElementById("sectionName1").innerHTML = "Examples of Force:  ";
    document.getElementById("reading1").innerHTML = "If you were a ball sitting on a field and someone kicked you, a force would have acted on you. As a result, you would go bouncing down the field. There are often many forces at work. Physicists might not study them all at the same time, but even if you were standing in one place, you would have many forces acting on you. Those forces would include gravity, the force of air particles hitting your body from all directions (as well as from wind), and the force being exerted by the ground (called the normal force). Let's look at the forces acting on that soccer ball before you kicked it. As it sat there, the force of gravity was keeping it on the ground, while the ground pushed upward, supporting the ball. On a molecular level, the surface of the ball was holding itself together as the gas inside of the ball tried to escape. There may have also been small forces trying to push it as the wind blew. Those forces were too small to get it rolling, but they were there. And you never know what was under the ball. Maybe an insect was stuck under the ball trying to push it up. That's another force to consider. If there is more than one force acting on an object, the forces can be added up if they act in the same direction, or subtracted if they act in opposition. Scientists measure forces in units called Newtons. When you start doing physics problems in class, you may read that the force applied to the soccer ball (from the kick) could be equal to 12 Newtons.";
}

window.show4 = function(){
    document.getElementById("sectionName1").innerHTML = "A Formula of Force:  ";
    document.getElementById("reading1").innerHTML = "Net force equals the mass of an object multiplied by its acceleration. There is one totally important formula when it comes to forces, F = ma. That's all there is, but everything revolves around that formula. 'F' is the total (net) force, 'm' is the object's mass, and 'a' is the acceleration that occurs. As a sentence, The net force applied to the object equals the mass of the object multiplied by the amount of its acceleration. The net force acting on the soccer ball is equal to the mass of the soccer ball multiplied by its change in velocity each second (its acceleration). Do you remember the wind gently blowing on the soccer ball? The force acting on the ball was very small because the mass of air was very small. Small masses generally exert small forces, which generally result in small accelerations (changes in motion).";
}

window.show5 = function(){
    document.getElementById("sectionName1").innerHTML = "Forces and Vectors: ";
    document.getElementById("reading1").innerHTML = " A vector can be used to represent any force. A force vector describes a specific amount of force that is applied in a specific direction. If you kick that soccer ball with the same force, but in different directions, and you get different results.";
}

window.show6 = function(){
    document.getElementById("sectionName1").innerHTML ="Vector Basics:  ";
    document.getElementById("reading1").innerHTML = "Force is one of many things that are vectors. What the heck is a vector? Can you hold it? No. Can you watch it? No. Does it do anything? Well, not really. A vector is a numerical value in a specific direction, and is used in both math and physics. The force vector describes a specific amount of force and its direction. You need both value and direction to have a vector. Both. Very important. Scientists refer to the two values as direction and magnitude (size). The alternative to a vector is a scalar. Scalars have values, but no direction is needed. Temperature, mass, and energy are examples of scalars. When you see vectors drawn in physics, they are drawn as arrows. The direction of the arrow is the direction of the vector, and the length of the arrow depends on the magnitude (size) of the vector.";
}

window.show7 = function(){
    document.getElementById("sectionName1").innerHTML = "Real World Vectors:  ";
    document.getElementById("reading1").innerHTML = "Imagine a situation where you're in a boat or a plane, and you need to plot a course. There aren't streets or signs along the way. You will need to plan your navigation on a map. You know where you're starting and where you want to be. The problem is how to get there. Now it's time to use a couple of vectors. Draw the vector between the two points and start on your way. As you move along your course, you will probably swerve a bit off course because of wind or water currents. Just go back to the map, find your current location, and plot a new vector that will take you to your destination. Captains use vectors (they know the speed and direction) to plot their courses.";
}

window.show8 = function(){
    document.getElementById("sectionName1").innerHTML = "Combining Vectors:  ";
    document.getElementById("reading1").innerHTML = "We are hoping you know how to add and subtract. Scientists often use vectors to represent situations graphically. When they have many vectors working at once, they draw all the vectors on a piece of paper and put them end to end. When all of the vectors are on paper, they can take the starting and ending points to figure out the answer. The final line they draw (from the start point to the end point) is called the Resultant vector. If you do not like to draw lines, you could always use geometry and trigonometry to solve the problems. It is up to you. Unlike normal adding of numbers, adding vectors can give you different results, depending on the direction of the vectors.";
}

window.show9 = function(){
    document.getElementById("sectionName1").innerHTML = "Newton's Laws of Motion: ";
    document.getElementById("reading1").innerHTML = "There was this fellow in England named Sir Isaac Newton. A little bit stuffy, bad hair, but quite an intelligent guy. He worked on developing calculus and physics at the same time. During his work, he came up with the three basic ideas that are applied to the physics of most motion (NOT modern physics). The ideas have been tested and verified so many times over the years, that scientists now call them Newton\'s Three Laws of Motion. ";
}

window.show10 = function(){
    document.getElementById("sectionName1").innerHTML = "First Law: ";
    document.getElementById("reading1").innerHTML = "The first law says that an object at rest tends to stay at rest, and an object in motion tends to stay in motion, with the same direction and speed. Motion (or lack of motion) cannot change without an unbalanced force acting. If nothing is happening to you, and nothing does happen, you will never go anywhere. If you're going in a specific direction, unless something happens to you, you will always go in that direction. Forever. You can see good examples of this idea when you see video footage of astronauts. Have you ever noticed that their tools float? They can just place them in space and they stay in one place. There is no interfering force to cause this situation to change. The same is true when they throw objects for the camera. Those objects move in a straight line. If they threw something when doing a spacewalk, that object would continue moving in the same direction and with the same speed unless interfered with; for example, if a planet's gravity pulled on it (Note: This is a really really simple way of descibing a big idea. You will learn all the real details - and math - when you start taking more advanced classes in physics.) ";
}

window.show11 = function(){
    document.getElementById("sectionName1").innerHTML = "Second Law: ";
    document.getElementById("reading1").innerHTML = "As acceleration increases, the force increases. The second law says that the acceleration of an object produced by a net (total) applied force is directly related to the magnitude of the force, the same direction as the force, and inversely related to the mass of the object (inverse is a value that is one over another number... the inverse of 2 is 1/2). The second law shows that if you exert the same force on two objects of different mass, you will get different accelerations (changes in motion). The effect (acceleration) on the smaller mass will be greater (more noticeable). The effect of a 10 newton force on a baseball would be much greater than that same force acting on a truck. The difference in effect (acceleration) is entirely due to the difference in their masses.";
}

window.show12 = function(){
    document.getElementById("sectionName1").innerHTML = "Third Law: ";
    document.getElementById("reading1").innerHTML = "The third law says that for every action (force) there is an equal and opposite reaction (force). Forces are found in pairs. Think about the time you sit in a chair. Your body exerts a force downward and that chair needs to exert an equal force upward or the chair will collapse. It's an issue of symmetry. Acting forces encounter other forces in the opposite direction. There's also the example of shooting a cannonball. When the cannonball is fired through the air (by the explosion), the cannon is pushed backward. The force pushing the ball out was equal to the force pushing the cannon back, but the effect on the cannon is less noticeable because it has a much larger mass. That example is similar to the kick when a gun fires a bullet forward.";
}

window.show13 = function(){
    document.getElementById("sectionName1").innerHTML = "Energy Around Us: ";
    document.getElementById("reading1").innerHTML = "We use the concept of energy to help us describe how and why things behave the way they do. We talk about solar energy, nuclear energy, electrical energy, chemical energy, etc. If you apply a force to an object, you may change its energy. That energy must be used to do work, or accelerate, an object. Energy is called a scalar; there is no direction to energy (as opposed to vectors). We also speak of kinetic energy, potential energy, and energy in springs. Energy is not something you can hold or touch. It is just another means of helping us to understand the world around us. Scientists measure energy in units called joules.";
}

window.show14 = function(){
    document.getElementById("sectionName1").innerHTML = "Active Energy vs. Stored Energy: ";
    document.getElementById("reading1").innerHTML = "One ball with potential energy and one ball with kinetic energy. Kinetic and potential energies are found in all objects. If an object is moving, it is said to have kinetic energy (KE). Potential energy (PE) is energy that is 'stored' because of the position and/or arrangement of the object. The classic example of potential energy is to pick up a brick. When it\'s on the ground, the brick had a certain amount of energy. When you pick it up, you apply force and lift the object. You did work. That work added energy to the brick. Once the brick is in a higher/new position, we would say that the increased energy was stored in the brick as PE. Now the brick can do something it couldn\'t do before; it can fall. And in falling, can exert forces and do work on other objects. ";
}

window.show15 = function(){
    document.getElementById("sectionName1").innerHTML = "Season of Springs: ";
    document.getElementById("reading1").innerHTML = "The study of springs is a whole section of physics. A spring that just sits there doesn\'t do much. When you push on it, you exert a force and change the arrangement of the coils. That change in the arrangement stores energy in the spring. It now contains energy and can expand and do work on other things. Anything that is elastic (can change its arrangement and then restore itself), such as a rubber band, can store energy in the same way. A rubber band can be stretched and then it is ready to do something. That stretching involves work and increases the potential energy. You can flatten a solid rubber ball and it will want to bounce back up. You can also pull the drawstring of a bow and the work done stores the energy that can make the arrow go flying. Those are all examples of your putting energy in, and then something happening when the energy comes out. ";
}

window.show16 = function(){
    document.getElementById("sectionName1").innerHTML = "Gases Storing Energy: ";
    document.getElementById("reading1").innerHTML = "Gases? What can they do? Gases are great because they can compress and expand. They act as if they were elastic. If the pressure increases and compresses gas molecules, the amount of stored energy increases. It\'s similar to a spring, but slightly different. Eventually that energy in the compressed gas can be let out to do something (work). In your car, there are shock absorbers. Some shocks have compressed gas in the cylinders rather than springs. The energy in those cylinders keeps your car from bouncing too much in potholes. Think about wind. Wind is caused because of pressure differences in the atmosphere. When the wind blows it can do anything - turn windmills, help birds fly, make tornadoes, and do all types of work.";
}


window.show1ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "Velocity, Speed, and Motion... Oh My!:";
    document.getElementById("reading2").innerHTML = " Velocity equals distance divided by time. Velocity and speed are very similar ideas, but velocity is a vector, and speed is not. Suppose we knew that someone was driving at thirty-five kilometers an hour (35 km/hr), but the direction wasn\'t given. How would you draw an arrow to represent a vector? You can\'t know how to draw the vector if you only have one value (either amount or direction). In this example, you were never told about the direction. Physicists would say that the speed is thirty-five kilometers an hour (35 km/hr), but the velocity is unknown. On the other hand, if you\'re moving at 35 km/hr in a northern direction, then you would have an arrow pointing north with a length of 35. Physicists would say that the velocity is 35 km/hr north. Velocity is the rate of motion in a specific direction. I\'m going that-a-way at 30 kilometers per hour. My velocity is 30 kilometers per hour that-a-way. Average speed is described as a measure of distance divided by time. Velocity can be constant, or it can change (acceleration). Speed with a direction is velocity. Remember vectors? You will use a lot of vectors when you work with velocity. Our real world example of navigation on the ocean used velocity for every vector. Velocity is a vector measurement because it has an amount and a direction. Speed is only an amount (a scalar). Speed doesn\'t tell the whole story to a physicist. Think of it another way. If I tell you I\'m driving north and ask you how long until we get to the city. You can\'t know the answer since you don\'t know my speed. You need both values.";
}

window.show2ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "One Moment in Time: ";
    document.getElementById("reading2").innerHTML = "Instantaneous velocity measures one moment in time. There is a special thing called instantaneous velocity. That\'s the velocity at a split second in time. Above, we were talking about your speed and direction over a long period of time. Why would you need to measure a velocity at one moment? Think about the moment you drove over the manhole. It\'s important to know if you were going 1 km/hr when you drove over the manhole, or 60 km/hr. It wouldn\'t help you to know that your average speed was 30 km/hr. The term 'instantaneous' refers to something physicists call a limit. Scientists 'limit' the amount of time they do the measurement. When the 'limit' moves to zero, that limit is one tiny moment in time. A physicist would measure your velocity as the 'limit for a period of time', zero, to get the instantaneous velocity.";
}

window.show3ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "Changing Your Velocity:";
    document.getElementById("reading2").innerHTML = " When velocity is changing, the word acceleration is used. Acceleration is also a vector. You speed up if the acceleration and velocity point in the same direction. You slow down (also referred to as decelerating) if the acceleration and velocity point in opposite directions. When you accelerate or decelerate, you change your velocity by a specific amount over a specific amount of time. Just as with velocity, there is something called instantaneous acceleration. Instantaneous means scientists measure your acceleration for a specific moment of time. That way they can say he was accelerating at exactly this amount at this point during his trip. ";
}

window.show4ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "Constant Acceleration: ";
    document.getElementById("reading2").innerHTML = "There are a few special situations where acceleration may be constant. This type of acceleration happens when there is a constant net force applied. The best example is gravity. Gravity\'s pull on objects is a constant here on Earth and it always pulls toward the center of the planet (Note: Gravity decreases as you move far away from the surface of the planet.). The gravities of other planets are different from Earth\'s gravity because they may have different masses and/or sizes. Even though the gravity may be smaller or larger, it will still create a constant acceleration near the surface of each planet.";
}

window.show5ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "Momentum Basics: ";
    document.getElementById("reading2").innerHTML = "Momentum is equal to the mass multiplied by the velocity. Momentum is another vector measurement. Momentum is in the same direction as velocity. Scientists calculate momentum by multiplying the mass of the object by the velocity of the object. It is an indication of how hard it would be to stop the object. If you were running, you might have a mass of 50 kilograms and a velocity of 10 meters per second west (really fast). Your momentum would be 500 kg-m/sec west. Easy as pi. Remember Newton\'s First Law? It said that any object moving will continue moving unless it is interfered with. That idea applies to momentum as well. The momentum of an object will never change if it is left alone. If the 'm' value and the 'v' value remain the same, the momentum value will be constant. Momentum increases as either mass or velocity increase. The momentum of an object, or set of objects (system), remains the same if it is left alone. Within such a system, momentum is said to be conserved. Here\'s the momentum idea in simpler terms. When you throw a ball at someone and it hits him hard, it hurts because it was difficult to stop (had momentum).Think about it. If you throw a small ball and a large ball at the same speeds, the large ball will hit a person with a greater momentum, be harder to stop, and hurt more. When the mass is greater (at the same speeds), the momentum is greater. A bullet is an example of an object with a very small mass that has a lot of momentum because it is moving very quickly. Bullets are therefore difficult to stop; it\'s a good idea not to try! ";
}

window.show6ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "Conserving Momentum: ";
    document.getElementById("reading2").innerHTML = "Elastic collisions have constant momentum while inelastic collisions lose momentum. We already told you that the momentum of an isolated object (or system of objects) is conserved. If the net force acting on an object is zero, then the linear momentum is constant. In an elastic collision (such as a superball hitting and rebounding from the ground), no kinetic energy is lost. All of that energy is still in the object, so we say that energy was conserved. If the kinetic energy didn\'t change, then neither did the value of the momentum (The momentum vector, however, DID change, since the direction of momentum changed.). Energy is a scalar, not a vector, so a direction change doesn\'t matter. What about an inelastic collision? In an inelastic collision, some of the energy will be lost to heat or sound or light or some other energy. The thing to remember is that the total energy didn\'t change, but some of it escaped into the air, ground, etc. The object would then have less energy when it rebounded, so the KE and momentum would be less. The total energy is the same, but the energy of the object did not remain the same. The energy of the object was not conserved, but the total energy was. Try throwing a piece of clay on the ground. When the clay slams into the ground, some of the kinetic energy of the clay was lost as heat and sound to the ground and air, and some of the heat remains in the clay. Since the velocity became zero, so did the momentum. The energy is still around, but divided up in different places.";
}

window.show7ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "Friction Basics: ";
    document.getElementById("reading2").innerHTML = "Friction is a force that acts in an opposite direction to movement. Friction is a force that holds back the movement of a sliding object. That\'s it. Friction is just that simple. You will find friction everywhere that objects come into contact with each other. The force acts in the opposite direction to the way an object wants to slide. If a car needs to stop at a stop sign, it slows because of the friction between the brakes and the wheels. If you run down the sidewalk and stop quickly, you can stop because of the friction between your shoes and the cement. What happens if you run down the sidewalk and you try to stop on a puddle? Friction is still there, but the liquid makes the surfaces smoother and the friction a lot less. Less friction means it is harder to stop. The low friction thing happens to cars when it rains. That\'s why there are often so many accidents. Even though the friction of the brakes is still there, the brakes may be wet, and the wheels are not in as much contact with the ground. Cars hydroplane when they go too fast on puddles of water. ";
}

window.show8ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "Friction and Gases: ";
    document.getElementById("reading2").innerHTML = "Air resistance of the atmosphere heats the bottom of the shuttle. Friction only happens with solid objects, but you do get resistance to motion in both liquids and gases. This doesn\'t involve sliding surfaces like friction does, but is instead the kind of resistance you get if you try to push your way through a crowd. It\'s a colliding situation, not a sliding one. If the gas is air, this is referred to as air resistance. If you were in the space shuttle and re-entering the atmosphere, the bottom of the shuttle would be getting very hot. The collisions that occur between the molecules of the air being compressed by the shuttle, heat up the air AND the shuttle itself. The temperature on the top of the shuttle is also warm, but nowhere near the temperatures found on the bottom. ";
}

window.show9ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "Friction and Liquids: ";
    document.getElementById("reading2").innerHTML = "Although liquids offer resistance to objects moving through them, they also smooth surfaces and reduce friction. Liquids tend to get thinner (less viscous) as they are heated. Yes, that\'s like the viscosity of the oil you put in your car. Car engines have a lot of moving parts, and they rub on each other. The rubbing produces friction and the result is heat. When oil is added to a car engine, the oil sticks to surfaces, and helps to decrease the amount of friction and wear on the parts of the engine. An engine that runs hotter requires a more viscous oil in order for it to stick to the surfaces properly. ";
}

window.show10ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "Measuring Friction: ";
    document.getElementById("reading2").innerHTML = "Higher coefficient of friction compared to lower coefficient of friction. Measures of friction are based on the type of materials that are in contact. Concrete on concrete has a very high coefficient of friction. That coefficient is a measure of how easily one object moves in relationship to another. When you have a high coefficient of friction, you have a lot of friction between the materials. Concrete on concrete has a very high coefficient, and Teflon on most things has a very low coefficient. Teflon is used on surfaces where we don\'t want things to stick; such as pots and pans. Scientists have discovered that there is even less friction in your joints than in Teflon! It is one more example at how efficient living organisms can be.";
}

window.show11ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "Forces of Attraction: ";
    document.getElementById("reading2").innerHTML = "Gravity of the Earth pulls objects towards the center of the planet. Gravity or gravitational forces are forces of attraction. We\'re not talking about finding someone really cute and adorable. It\'s like the Earth pulling on you and keeping you on the ground. That pull is gravity at work. Every object in the universe that has mass exerts a gravitational pull, or force, on every other mass. The size of the pull depends on the masses of the objects. You exert a gravitational force on the people around you, but that force isn\'t very strong, since people aren\'t very massive. When you look at really large masses, like the Earth and Moon, the gravitational pull becomes very impressive. The gravitational force between the Earth and the molecules of gas in the atmosphere is strong enough to hold the atmosphere close to our surface. Smaller planets, that have less mass, may not be able to hold an atmosphere. ";
}

window.show12ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "Planetary Gravity: ";
    document.getElementById("reading2").innerHTML = "Obviously, gravity is very important on Earth. The Sun\'s gravitational pull keeps our planet orbiting the Sun. The motion of the Moon is affected by the gravity of the Sun AND the Earth. The Moon\'s gravity pulls on the Earth and makes the tides rise and fall every day. As the Moon passes over the ocean, there is a swell in the sea level. As the Earth rotates, the Moon passes over new parts of the Earth, causing the swell to move also. The tides are independent of the phase of the moon. The moon has the same amount of pull whether there is a full or new moon. It would still be in the same basic place. We have to bring up an important idea now. The Earth always produces the same acceleration on every object. If you drop an acorn or a piano, they will gain velocity at the same rate. Although the gravitational force the Earth exerts on the objects is different, their masses are just as different, so the effect we observe (acceleration) is the same for each. The Earth\'s gravitational force accelerates objects when they fall. It constantly pulls, and the objects constantly speed up. ";
}

window.show13ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "They Always ask About Feathers: ";
    document.getElementById("reading2").innerHTML = "Both the feather and the ball fall at the same speed in a vacuum. People always say, 'What about feathers? They fall so slowly.' Obviously, there is air all around us. When a feather falls, it falls slowly because the air is in its way. There is a lot of air resistance and that resistance makes the feather move slower. The forces at work are the same. If you dropped a feather in a container with no air (a vacuum), it would drop as fast as a baseball. ";
}

window.show14ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "What About the Moon?: ";
    document.getElementById("reading2").innerHTML = "But what keeps the Moon from falling down, if all of this gravity is so strong? Well, the answer is that the moon IS falling; all the time, but doesn\'t get any closer to us! Remember that if there wasn\'t a force acting, the Moon would be traveling in a straight line. Because there IS a force of attraction toward the Earth, the moon 'falls' from a straight line into a curve (orbit) around the Earth and ends up revolving around us. The Earth\'s gravity holds it in orbit, so it can\'t just go off in a straight line. Think about holding a ball on a string and spinning it in a circle. If you were to cut that string (no more gravity), the ball would fly off in a straight line in the direction it was going when you cut the string. That direction, by the way, is not directly away from your hand, but tangent to the circle. Tangent is a geometry term used to describe a direction that are related to the slope of a curve. Math stuff. The pull of the string inward (toward your hand) is like the Earth\'s gravitational pull (inward toward the center of the Earth).";
}

window.show15ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "All Work and no Play: ";
    document.getElementById("reading2").innerHTML = "Work, work, work. You might head off to your job one day, sit at a computer, and type away at the keys. That\'s all we do here. Is that work? To a physicist, only parts of it are. Work is done when a force that is applied to an object moves that object. The work is calculated by multiplying the force by the amount of movement of an object (W = F * d). A force of 10 newtons, that moves an object 3 meters, does 30 n-m of work. A newton-meter is the same thing as a joule, so the units for work are the same as those for energy – joules. Sitting and looking at a computer screen is not work. Tapping on the keyboard and making the keys move is work. Your fingers are applying a force and moving the keys. Driving to your job is not work because you just sit, but the energy your car engine uses to move the car does work. You have to exert a force AND move something to qualify as doing work. Holding a box does not require work. Raising the box requires work. Imagine that you are holding a brick above the ground. Your arm is straight out in front of you and it\'s pretty tough to hold. Slowly, your arm gets tired, the brick feels heavier and heavier, and you finally have to stop to let your arm rest. Even though you put forth a lot of effort to hold the brick up, did you do any work on the brick? Nope. The brick didn\'t move. No work was done if no movement happened. If you lifted the brick again after your arm had rested, that would be work. ";
}

window.show16ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "Transfer of Energy: ";
    document.getElementById("reading2").innerHTML = "Work transfers energy from one object to another. We\'ve already talked about moving objects. What else? Work is also linked to the expansion and compression of gases. When a gas tries to expand, it exerts an increasing force on the surfaces of a container and may make those surfaces move. The gas would then be doing work and transferring energy to the container. If you heat a balloon (carefully), the molecules of air in the balloon gain energy and strike the inner walls of the balloon with greater force. Because the inner surface of the balloon is flexible, that surface moves outward. The air does work, and transfers energy to the balloon. If you compress a balloon, you do work, and transfer energy to the air inside the balloon. ";
}

window.show17ch2 = function(){
    document.getElementById("sectionName2").innerHTML = "Measuring Work for Gases: ";
    document.getElementById("reading2").innerHTML = "When scientists measure the work done on, or by, gases, they look at the system at the beginning and the end of the project. They look at the initial and final states. To figure out the total work done on, or by, a gas system, they use the formula W = P (delta)V. W stands for work, P is the pressure of the system (for gases), and delta V is the change in volume for the system. A variation would be W = V(delta P), where V is volume, and delta P is the change in pressure. The delta values are taken at the beginning and end. Sometimes they might take measurements while things are happening. Those are measurements of intermediate states. They could then use the intermediate measurements to calculate work, and then total those work values up to figure the total work done.";
}


window.show1ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Heat and Thermal Energy:";
    document.getElementById("reading3").innerHTML = " When scientists originally studied thermodynamics, they were really studying heat and thermal energy. Heat can do anything: move from one area to another, get atoms excited, and even increase energy. Did we say energy? That\'s what heat is. When you increase the heat in a system, you are really increasing the amount of energy in the system. Now that you understand that fact, you can see that the study of thermodynamics is the study of the amount of energy moving in and out of systems. ";
}

window.show2ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Heat of Atoms:";
    document.getElementById("reading3").innerHTML = " Now all of this energy is moving around the world. You need to remember that it all happens on a really small scale. Energy that is transferred is at an atomic level. Atoms and molecules are transmitting these tiny amounts of energy. When heat moves from one area to another, it\'s because millions of atoms and molecules are working together. Those millions of pieces become the energy flow throughout the entire planet. ";
}

window.show3ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Heat Movement:";
    document.getElementById("reading3").innerHTML = " Heat moves from one system to another because of differences in the temperatures of the systems. If you have two identical systems with equal temperatures, there will be no flow of energy. When you have two systems with different temperatures, the energy will start to flow. Air mass of high pressure forces large numbers of molecules into areas of low pressure. Areas of high temperature give off energy to areas with lower temperature. There is a constant flow of energy throughout the universe. Heat is only one type of that energy. ";
}

window.show4ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Increasing Energy and Entropy:";
    document.getElementById("reading3").innerHTML = " Another big idea in thermodynamics is the concept of energy that changes the freedom of molecules. For example, when you change the state of a system (solid, liquid, gas), the atoms and/or molecules have different arrangements and degrees of freedom to move. That increase in freedom is called entropy. Atoms are able to move around more and there is more activity. That increase in freedom (also called randomness) is an increase in entropy.";
}

window.show5ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Energy Likes to Move:";
    document.getElementById("reading3").innerHTML = " If there is a temperature difference in a system, heat will naturally move from high to low temperatures. The place you find the higher temperature is the heat source. The area where the temperature is lower is the heat sink. When examining systems, scientists measure a number called the temperature gradient. The gradient is the change in temperature divided by the distance. The units are degrees per centimeter. If the temperature drops over a specific distance, the gradient is a negative value. If the temperature goes up, the gradient has a positive value. The greater the gradient, the more energy will be exchanged. ";
}

window.show6ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Ever Hear of Convection Ovens?:";
    document.getElementById("reading3").innerHTML = " Convection is the way heat is transferred from one area to another when there is a 'bulk movement of matter.' It is the movement of huge amounts of material, taking the heat from one area and placing it in another. Warm air rises and cold air replaces it. The heat has moved. It is the transfer of heat by motion of objects. Convection occurs when an area of hot water rises to the top of a pot and gives off energy. Another example is warm air in the atmosphere rising and giving off energy. They are all examples of convection. The thing to remember is that objects change position. ";
}

window.show7ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Radiating Energy:";
    document.getElementById("reading3").innerHTML = " When the transfer of energy happens by radiation, there is no conductive medium (such as in space). That lack of medium means there is no matter there for the heat to pass through. Radiation is the energy carried by electromagnetic waves (light). Those waves could be radio waves, infrared, visible light, UV, or Gamma rays. Heat radiation is usually found in the infrared sections of the EM spectrum. If the temperature of an object doubles (in Kelvin), the thermal radiation increases 16 times. Therefore, if it goes up four times, it increases to 32 times the original level. Scientists have also discovered that objects that are good at giving off thermal radiation are also good at absorbing the same energy. Usually the amount of radiation given off by an object depends on the temperature. The rate at which you absorb the energy depends on the energy of the objects and molecules surrounding you. ";
}

window.show8ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Conducting Energy and Heat:";
    document.getElementById("reading3").innerHTML = " Conduction is a situation where the heat source and heat sink are connected by matter. As we discussed before, the heat flows from the source down the temperature gradient to the sink. It is different from convection because there is no movement of large amounts of matter, and the transfers are through collisions. The source and the sink are connected. If you touch an ice cream cone, the ice cream heats up because you are a warmer body. If you lie on a hot sidewalk, the energy moves directly to your body by conduction. When scientists studied good thermal radiators, they discovered that good thermal conductors are also good at conducting electricity. So when you think of a good thermal conductor, think about copper, silver, gold, and platinum.";
}

window.show9ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Getting Hotter = Getting Bigger:";
    document.getElementById("reading3").innerHTML = " Now you need to think about states of matter a little bit. We\'ll start with gases. The idea behind thermal expansion is that gases expand as the temperature increases. If you have a balloon and you heat up the contents, the balloon will get larger. Scientists use the term ideal gas law to describe this activity. Liquids expand and contract, too, but there is a lot less change than in gases. Scientists say they have a smaller thermal expansion coefficient. As you can probably figure out, solids expand and contract the least of all the states of matter. The expansion coefficient is different for each piece of matter. It is a unique value, just like specific heat capacity. Two examples of coefficients are air at .00367 and alcohol at .000112. ";
}

window.show10ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Things Shrink When They get Cold:";
    document.getElementById("reading3").innerHTML = " The opposite of expansion is contraction. If things expand with the addition of heat, it makes sense that they contract when heat is removed. If you remove enough heat from a gas it will become a liquid. Liquids can turn into solids with further cooling. What happens when you remove almost all of the energy from a system? Scientists use the terms absolute zero to describe a system that has no kinetic energy. When there is no kinetic energy in a system, all molecular motion stops. It seems that even the atoms begin to merge at these low temperatures. Physicists have recently created the Bose-Einstein state of matter that has a small group of atoms with nearly all of the kinetic energy taken out of the system.";
}

window.show11ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Making Heat:";
    document.getElementById("reading3").innerHTML = " How do you make heat? You could burn things (chemical reactions), or you could rub things together (friction). When you burn things, thermal energy is released. Thermal energy is measured in calories. For example, when you burn wood, you release 3000 calories for each gram of wood. When you burn an apple, it creates only 600 calories. The amount of energy released is directly related to the chemical bonds that are broken and formed. If you use that idea, there is more energy available when you break and rebond the atoms in wood, than when you do the same to an apple. ";
}

window.show12ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Losing Energy: ";
    document.getElementById("reading3").innerHTML = "We just talked about friction. Heat is also created because of inefficiency. When a car engine runs, a lot of heat is given off. Much of that heat is the result of the friction and inefficiency in the running motor. When you lift something and your muscle contracts, you are only 25% efficient. Seventy-five percent of the energy is lost to heat. ";
}

window.show13ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "More Transfer of Energy:";
    document.getElementById("reading3").innerHTML = " Heat is the thermal energy transported from one system to another because of a temperature difference. The transfer of that energy stops when the temperature balances out in the entire environment. Scientists use the unit of a calorie to measure heat. You might be saying, 'I\'ve heard of calories. Are those like the ones in food?' The answer is 'Yes.' One calorie is measured as the amount of energy needed to raise the temperature of one gram of water, one degree Celsius. When you “burn” food (this happens VERY slowly in your body), you release energy. ";
}

window.show14ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Specific Heat Capacity:";
    document.getElementById("reading3").innerHTML = " There is also something totally important called specific heat capacity. It is the amount of energy required to raise the temperature of one gram of a substance by one degree Celsius. The specific heat capacity for water is one. As we said, heat is a form of thermal energy. Because it\'s energy, scientists also use the units of Joules to measure the energy. One calorie equals 4.186 Joules which also equals 4.186 Watts seconds (Ws). Does that mean you can measure the amount of energy you make in your body in one second and express that in terms of an electric value (Watts)? Yes, the rate at which energy is created or used in your body can be expressed as electrical power.";
}

window.show15ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Three Big Temperature Scales:";
    document.getElementById("reading3").innerHTML = " Since we\'re going to be talking about heat, temperatures, and energy, we wanted to introduce you to how temperature is measured. The big three are Fahrenheit, Celsius and Kelvin. Even though scientists may use only a few scales to measure temperature, there are dozens of types of devices that measure temperatures. All of these devices are called thermometers because they measure temperature. There are thermometers to measure your body temperature, the temperature in your oven, and even the temperature of liquid oxygen. ";
}

window.show16ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Fahrenheit is the Classic: ";
    document.getElementById("reading3").innerHTML = "Fahrenheit is the classic English system of measuring temperatures. Water freezes at 32 degrees Fahrenheit and boils at 212 degrees. The scale was created by Gabriel Daniel Fahrenheit in 1724 and divides the difference between the boiling point and freezing point of water into 180 equal degrees. You will probably be asked to convert temperatures back and forth from Fahrenheit to Celsius. Here\'s the formula: (Fahrenheit-32)*5/9=Celsius. ";
}

window.show17ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Celsius Based on Water: ";
    document.getElementById("reading3").innerHTML = "Celsius is the modern system of measuring temperature. It fits in with much of the metric system and has nice round numbers. In Celsius, we call the freezing point of water 0 degrees Celsius, and the boiling point 100 degrees Celsius. Then the scale is divided into 100 equal degrees between those two points. The scale used to be known as centigrade but the name was changed several years ago. Both Celsius and Fahrenheit are used when discussing our day-to-day weather temperatures. Celsius degrees are larger than Fahrenheit degrees. ";
}

window.show18ch3 = function(){
    document.getElementById("sectionName3").innerHTML = "Kelvin to Absolute Zero:";
    document.getElementById("reading3").innerHTML = " Kelvin is an important scale used in most of science. The big difference is that it is based on a single point (absolute zero) which is given a value of 0 degrees. From there, the scale increases by degrees that are the same size as Celsius degrees. It is a scale that is based on energy content, rather than on arbitrary temperature values like the other two scale (based on water). Water freezes at the value 273.15 and boils at 373.15 Kelvin. The word 'Kelvin' comes from Lord Kelvin, who did a lot of work with temperatures.";
}


window.show1ch4 = function(){
    document.getElementById("sectionName4").innerHTML = "Thermodynamic Laws that Explain Systems:";
    document.getElementById("reading4").innerHTML = " A thermodynamic system is one that interacts and exchanges energy with the area around it. The exchange and transfer need to happen in at least two ways. At least one way must be the transfer of heat. If the thermodynamic system is 'in equilibrium,' it can\'t change its state or status without interacting with its environment. Simply put, if you\'re in equilibrium, you\'re a 'happy system,' just minding your own business. You can\'t really do anything. If you do, you have to interact with the world around you. ";
}

window.show2ch4 = function(){
    document.getElementById("sectionName4").innerHTML = "A Zeroth Law?:";
    document.getElementById("reading4").innerHTML = " The zeroth law of thermodynamics will be our starting point. We\'re not really sure why this law is the zeroth. We think scientists had 'first' and 'second' for a long time, but this new one was so important it should come before the others. And voila! Law Number Zero! Here\'s what it says: When two systems are sitting in equilibrium with a third system, they are also in thermal equilibrium with each other. In English: systems 'One' and 'Two' are each in equilibrium with 'Three.' That means they each have the same energy content as 'Three'. But if THAT\'S true, then all the values found in 'Three', match those in both 'One' and 'Two'. It\'s obvious, then, that the values of 'One' and 'Two' must ALSO match. This means that 'One' and 'Two' have to be in equilibrium with each other. ";
}

window.show3ch4 = function(){
    document.getElementById("sectionName4").innerHTML = "A First Law:";
    document.getElementById("reading4").innerHTML = " The first law of thermodynamics is a little simpler. The first law states that when heat is added to a system, some of that energy stays in the system and some leaves the system. The energy that leaves does work on the area around it. Energy that stays in the system creates an increase in the internal energy of the system. In English: you have a pot of water at room temperature. You add some heat to the system. First, the temperature and energy of the water increases. Second, the system releases some energy and it works on the environment (maybe heating the air around the water, making the air rise). ";
}

window.show4ch4 = function(){
    document.getElementById("sectionName4").innerHTML = "A Second Law:";
    document.getElementById("reading4").innerHTML = " The big finish! The second law of thermodynamics explains that it is impossible to have a cyclic (repeating) process that converts heat completely into work. It is also impossible to have a process that transfers heat from cool objects to warm objects without using work. In English: that first part of the law says no reaction is 100% efficient. Some amount of energy in a reaction is always lost to heat. Also, a system can not convert all of its energy to working energy. The second part of the law is more obvious. A cold body can\'t heat up a warm body. Heat naturally wants to flow from warmer to cooler areas. Heat wants to flow and spread out to areas with less heat. If heat is going to move from cooler to warmer areas, it is going against what is 'natural', so the system must put in some work for it to happen.";
}

window.show5ch4 = function(){
    document.getElementById("sectionName4").innerHTML = "A Closer Look at the First Law:";
    document.getElementById("reading4").innerHTML = " Remember the first law of thermodynamics? It described the conservation of energy. When you have a system and it changes, there are four ways it can change its energy. We\'ll talk about those four ways of changing energy in this section. ";
}

window.show6ch4 = function(){
    document.getElementById("sectionName4").innerHTML = "Four Thermodynamic Systems:";
    document.getElementById("reading4").innerHTML = " Adiabatic describes a system that changes with no transfer of heat in or out. If a system expands adiabatically, then the internal energy (heat) of the system usually decreases. This is because you did some work to expand the system, and that had to come from the heat energy of the system (since no heat energy can enter the system). The second type of system is isovolumic. You can probably see the term 'volum' in there. Iso usually stands for constant. Put them together and you get a system that changes, but the volume stays constant. These types of changes do not produce any work on the environment. The third type of system is isobaric. You\'ve seen the prefix iso before, and the suffix baric refers to pressure. This system changes but keeps a constant pressure. All of the change is in the volume of gas in the system. As you blow air into a balloon, the volume will increase, but the pressure will stay the same. As energy is put into the system, temperature or volume may increase (or both), but there will be no increase in temperature. The fourth type of system is isothermal. One last iso prefix, and the suffix is now thermal. We\'re talking about systems that change in every way but their temperature. You would say that these systems are in thermal equilibrium. You would see that the pressure and volume change. As energy is put in the system, the pressure or volume will increase (or both), but there will be no increase in temperature.";
}

window.show7ch4 = function(){
    document.getElementById("sectionName4").innerHTML = "A Closer Look at the Second Law:";
    document.getElementById("reading4").innerHTML = " We\'re going to talk about the second law of thermodynamics here. Scientists use a word called entropy to describe the degree of freedom (randomness) in a system. Remember, there are two words in thermodynamics: entropy, which talks about randomness, and enthalpy, which is a measure of the heat energy in a system. Big difference. Heat flows from hot areas to cold, not the other way. If its energy is to flow from cold to hot, it needs additional energy. Heat is also conserved when energy transfer occurs. That conservation means that when you look at the energy of both systems at the beginning of the reaction and at the end, the total energy amounts are equal. Energy has moved from one area to another, but the total remains the same. The second law also considers the entropy of a system. Entropy is a measure of the amount of disorder (chaos) in a system. A good rule of thumb is the more disorder you have, the more energy you have. ";
}

window.show8ch4 = function(){
    document.getElementById("sectionName4").innerHTML = "Forward and Backward:";
    document.getElementById("reading4").innerHTML = " You might hear the term reversibility. Scientists use the term reversibility to describe systems that are in equilibrium with themselves and the environment around them. When a system is in equilibrium, any change that occurs in one direction is balanced by an equal change in the opposite direction. Reversibility means that effects can be reversed. This implies that the system is isolated (nothing is interfering, nothing entering or leaving). Overall, their effect and change on the system are zero. ";
}

window.show9ch4 = function(){
    document.getElementById("sectionName4").innerHTML = "Even at Equilibrium:";
    document.getElementById("reading4").innerHTML = " So you\'ve got a system at equilibrium. Look closely and you\'ll find certain qualities. You\'ll find that in these systems the heat transfer is due to temperature differences. You\'ll also discover that wild changes do not happen in an isolated system. To get big changes, you need energy. When you\'re at equilibrium, there is no gain or loss of energy. Lastly, you\'ll see that there is no friction involved in the system. If friction occurred, heat would be created and work would be needed to overcome the friction. That work would take energy out of the system.";
}

window.show10ch4 = function(){
    document.getElementById("sectionName4").innerHTML = "Energy and Enthalpy:";
    document.getElementById("reading4").innerHTML = " Enthalpy is a measure of heat in the system. They use the formula H = U + PV. H is the enthalpy value, U is the amount of internal energy, and P and V are pressure and volume of the system. This system works really well for gases. ";
}

window.show11ch4 = function(){
    document.getElementById("sectionName4").innerHTML = "Affecting Enthalpy:";
    document.getElementById("reading4").innerHTML = " There are factors that affect the level of enthalpy in a system. The enthalpy is directly proportional to the amount of substance you have. Chances are if you have more of a substance, you have more energy. If you visualize on a large scale, you can compare the enthalpy in a glass of water to the enthalpy in the ocean. The ocean has more total energy. The second thing to remember is that the value for H (enthalpy) changes sign when the reactions or values are reversed. When a reaction moves in one direction, the sign is positive. When a reaction moves in the opposite direction, the value is negative. (Note: When you have numbers only, the idea of direction (as in vectors, for example) is difficult to convey. With numbers, we convey direction by using signs. One way is 'positive' and the opposite way is 'negative'). When a system is in equilibrium the speed of forward reactions equals the speed of reverse reactions. The third idea to remember is called Hess's Law. If a process happens in stages or steps, the enthalpic change for the overall (isolated) system can be figured out by adding the changes in enthalpy for each step. This recognizes that energy is conserved in an isolated system. Many reactions occur in steps. Only after looking at each step, and combining their effects, are you able to understand and measure the entire process.";
}

window.show12ch4 = function(){
    document.getElementById("sectionName4").innerHTML = "Energy and Entropy:";
    document.getElementById("reading4").innerHTML = " Entropy is a measure of the random activity in a system. The entropy of a system depends on your observations at one moment. How the system gets to that point doesn\'t matter at all. If it took a billion years and a million different reactions doesn\'t matter. Here and now is all that matters in entropy measurements. When we say random, we mean energy that can\'t be used for any work. It\'s wild and untamed. Scientists use the formula (delta)S = (delta)Q /(delta)T. 'S' is the entropy value, 'Q' is the measure of heat, and 'T' is the temperature of the system measured in Kelvin degrees. When we use the symbol delta, it stands for the change. Delta T would be the change in temperature (the original temperature subtracted from the final). ";
}

window.show13ch4 = function(){
    document.getElementById("sectionName4").innerHTML = "Affecting Entropy:";
    document.getElementById("reading4").innerHTML = " Several factors affect the amount of entropy in a system. If you increase temperature, you increase entropy. (1) More energy put into a system excites the molecules and the amount of random activity. (2) As a gas expands in a system, entropy increases. This one is also easy to visualize. If an atom has more space to bounce around, it will bounce more. Gases and plasmas have large amounts of entropy when compared to liquids and solids. (3) When a solid becomes a liquid, its entropy increases. (4) When a liquid becomes a gas, its entropy increases. We just talked about this idea. If you give atoms more room to move around, they will move. You can also think about it in terms of energy put into a system. If you add energy to a solid, it can become a liquid. Liquids have more energy and entropy than solids. (5) Any chemical reaction that increases the number of gas molecules also increases entropy. A chemical reaction that increases the number of gas molecules would be a reaction that pours energy into a system. More energy gives you greater entropy and randomness of the atoms.";
}


window.show1ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Types of Light:";
    document.getElementById("reading5").innerHTML = " To understand light you have to know that what we call light is what is visible to us. Visible light is the light that humans can see. Other animals can see different types of light. Dogs can see only shades of gray and some insects can see light from the ultraviolet part of the spectrum. The key thing to remember is that our light is what scientists call visible light. Scientists also call light electromagnetic radiation. Visible light is only one small portion of a family of waves called electromagnetic (EM) radiation. The entire spectrum of these EM waves includes radio waves, which have very long wavelengths and both gamma rays and cosmic rays, which are at the other end of the spectrum and have very small wavelengths. Visible light is near the middle of the spectrum. ";
}

window.show2ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "It's all Energy:";
    document.getElementById("reading5").innerHTML = " The key thing to remember is that light and EM radiation carry energy. The quantum theory suggests that light consists of very small bundles of energy/particles; it\'s just that simple. Scientists call those small particles photons, and the wavelength determines the energy and type of EM radiation, and the number of photons tells you how much radiation there is. A lot of photons give a brighter, more intense type of light. Fewer photons give a very dim and less intense light. When you use the dimmer switch on the wall, you are decreasing the number of photons sent from the light bulb. The type of light is the same while the amount has changed. ";
}

window.show3ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Different Speeds of Light?:";
    document.getElementById("reading5").innerHTML = " As far as we know, all types of light move at one speed when in a vacuum. The speed of light in a vacuum is 299,792,458 meters per second. That speed is really fast, but even when you\'re traveling that fast, it takes a while to get places in space. It takes about seven minutes for light from the Sun to reach Earth. It takes over four years for the light from our Sun to get to the nearest star. It would take a particle of light over 100,000 years to get from one side of our galaxy to the other side. All of those values are light moving through a vacuum. You can slow light down in other substances such as the atmosphere, water, or a diamond. Light moves at about 124,000,000 meters per second (less than half the speed in a vacuum) in a diamond.";
}

window.show4ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Types of Electromagnetic Radiation: ";
    document.getElementById("reading5").innerHTML = "There are waves of energy and light moving all around us in the form of TV and audio transmissions, gamma radiation from space, and heat in the atmosphere. Scientists call them all electromagnetic radiation. The waves of energy are called electromagnetic (EM) because they have oscillating electric and magnetic fields. Scientists classify them by their frequency or wavelength, going from high to low frequency (short to long wavelength). For a wave with a high frequency, it has a lot of energy, so it could be a gamma ray or x-ray. If it has low frequency, it has less energy and could be a TV or radio wave. All EM energy waves travel at the speed of light. No matter what their frequency or wavelength, they always move at the same speed. Some properties of waves, such as diffraction and interference, are also seen in EM radiation. Scientists have figured out that there are tiny particles in these waves; they are called photons. The photons are specific units, or packets, of energy. Sometimes those particles interact with each other and change the way the light originally behaved. ";
}

window.show5ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Listening to the Heavens:";
    document.getElementById("reading5").innerHTML = " All types of EM radiation are useful to the world of science. Look at radio waves as an example. Radio stations and ham radio operators of Earth work with radio waves every day. Radio waves are used to carry communications from one point to another. Radio waves are also extremely important to astronomers. Astronomers are constantly listening to the radio waves of other galaxies to learn more about their stars. Stars give off large amounts of EM radiation across the entire spectrum, and we can study that radiation to learn more about the universe. ";
}

window.show6ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Radiation Doesn't Scare Us... Much:";
    document.getElementById("reading5").innerHTML = " An important idea you should always remember is that sometimes we use the word radiation. When you think of radiation, you probably think about nuclear power plants, bombs, and X-rays. Sure, those are all types of radiation. Nevertheless, more important to physics is the idea that all light is considered radiation. That means that everything from television and radio waves to gamma rays are all types of radiation. Think about the word LASER. The R stands for radiation, while a laser is just a souped-up flashlight. Think about heat. Most heat is actually infrared light being given off by an object. That heat is also radiation.";
}

window.show7ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Seeing the Light:";
    document.getElementById("reading5").innerHTML = " Let\'s take a moment to talk about visible light. As you can tell by the name, visible light is the light that humans can see. More specifically, you see the light that is not absorbed by objects. Green plants are green because they absorb all of the colors of the visible spectrum except the green color (you could also say the green wavelengths). A red wall is red to your eyes because it is not absorbing light from the red wavelengths. Mirrors reflect all of the colors of visible light. ";
}

window.show8ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Not Seeing the Light:";
    document.getElementById("reading5").innerHTML = " We describe the world the way we see it as humans. Other living things on Earth see the world in different ways. Dogs only see things in black, white and gray. Some insects see colors that none of us can see. When you are learning about visible light you should remember we mean visible to humans. We should also mention that not all humans can see all the colors. There is an eye defect called color-blindness that affects many men. Color-blind men cannot see certain colors of the spectrum. It has to do with a genetic defect in their eyes. ";
}

window.show9ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Visible Light Colors:";
    document.getElementById("reading5").innerHTML = " We now introduce you to Mr. Roy G. Biv. Was he a scientist? No. Did he create great optics and telescopes? No. He is not even a he. ROY-G-BIV is the acronym that represents all of the colors in the visible spectrum of light. R (red) - O (orange) - Y (yellow) - G (green) - B (blue) - I (indigo) - V (violet). Not only are those the colors we can see as humans, but they are also in the right order. Red has the longest wavelength and violet has the shortest. You could also say that red is the least energetic and violet is the most energetic of the visible spectrum. ";
}

window.show10ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Edges of Visibility:";
    document.getElementById("reading5").innerHTML = " Although we can\'t see them with our eyes, some wavelengths of light that bookend the visible spectrum are also important. Infrared radiation is next to the red portion of the spectrum. Infrared light is heat. Scientists use infrared light sensing optics when they want to see differences in temperature. Ultraviolet radiation (UV) is just beyond the violet end of the visible spectrum. UV light is given off by the Sun and absorbed by ozone in the atmosphere. Ultraviolet light can also mutate cells in your skin and give you skin cancer.";
}

window.show11ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Particles and Waves:";
    document.getElementById("reading5").innerHTML = " During the early 1900\'s scientists proved that electromagnetic radiation not only has packs of energy (quanta), but also proved that light moves in a wave pattern. It\'s like a stream of individual packets. ";
}

window.show12ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Looking at the Waves:";
    document.getElementById("reading5").innerHTML = " All types of light move in wave-like patterns. In each wave pattern are high points and low points. The distance between two high points, or low points, is called the wavelength. Scientists use the Greek letter lambda to describe that distance. Depending on what type of light you are talking about, each type has a different lambda, or wavelength. All of the wavelengths of light together are called the EM spectrum. ";
}

window.show13ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Looking at the Particles:";
    document.getElementById("reading5").innerHTML = " Light not only moves in waves; it also moves with a flow of little particles. Scientists call these particles of light, photons. The packets contain the energy that makes up the energy of the light. Scientists measure something called the relative energy of different types of light. The energy increases as the wavelength decreases. ";
}

window.show14ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Looking at the Energy:";
    document.getElementById("reading5").innerHTML = " Compare different types of light. You will see that as you move up the EM spectrum and the wavelengths get smaller, those types of light have more energy. The big idea to remember is that light consists of both waves, and energy (transmitted with particles). EM radiation, like gamma waves and cosmic waves, has huge amounts of energy compared to a radio wave. When you look at the visible part of the spectrum, you will see that violet light is more energetic than light from the red part of the spectrum.";
}

window.show15ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Reflection Basics:";
    document.getElementById("reading5").innerHTML = " When a light ray hits an object and bounces off, it is called reflection. When you think of reflection, think about mirrors. They reflect all of the light. That is the reason you can see yourself. Even the ocean reflects light, just not all of it. If you are above the ocean, you can\'t see the reflection that well, but when you are at an angle, look closely; you can see a reflection of the sky. So the ocean only has partial reflectivity.";
}

window.show16ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Refraction Basics:";
    document.getElementById("reading5").innerHTML = " When scientists talk about refraction, they use a formula. 'n = c / v' 'c' is the speed of light in a vacuum, 'v' is the speed of light in that substance and 'n' is the index of refraction. According to the formula, the index of refraction is the relation between the speed of light in a vacuum and the speed of light in a substance. But what is refraction? When light moves from one substance to another it changes speed and direction. That change in direction is called refraction. Some indexes of refraction are diamond (2.419), glass (1.523), and water (1.33). Let\'s make a jump here. Since our formula says n=c/v and we know that the value for c is a constant, we can figure out that light has different speeds when it is in different substances. It goes at full speed in a vacuum, and slower everywhere else. Using our examples, we can discover that light moves faster in water than it does in a diamond. Light moves at its fastest speeds when it is in a vacuum. Light moves at about 124,000,000 meters per second (less than half the speed in a vacuum) in a diamond compared to 299,792,458 meters per second in a vacuum. Light is refracted only when it hits a boundary at an angle, so if light goes straight down into a substance it will continue to move straight down. You need to understand that the speed of light changes in different substances. If a light ray slows down when it hits a substance, it bends towards the normal. The normal is the line that is perpendicular to the surface of the substance. If a light ray speeds up when it hits a substance, it moves away from the normal. ";
}

window.show17ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Bending Light with Refraction:";
    document.getElementById("reading5").innerHTML = " Lenses are pieces of glass that bend light. The easiest thing to think about is lenses in eyeglasses. People who do not have 20/20 vision might see things a little out of focus. They wear glasses or contact lenses to make their sight clearer. Those glasses have specially ground lenses that bend the rays of light just enough to focus the image for the person to see properly. All lenses bend and refract rays of light. In the refraction section we said that light changes speeds when it moves from one medium to another. A medium is a substance like water, air, or glass. When light slows down or speeds up it changes direction a little bit. There are three basic shapes that a lens can have: concave, convex, and planar. A concave shape is bowed inward, like looking into a mixing bowl. Convex is just the opposite, bowed outward. Have you ever seen those mirrors in the grocery stores, where everything is reflected in a spherical way? That\'s convex. Planar is just that, a plane. It\'s a flat surface. Just think of a planar mirror on your wall. ";
}

window.show18ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Using Lenses:";
    document.getElementById("reading5").innerHTML = " Telescopes and microscopes are excellent examples of how lenses are used every day. By using different combinations of lenses, light is focused to create an image we could not see with the naked eye. Telescopes are able to see very distant objects that are very small to our sight and magnify them so we can see the details. The larger telescopes offer a greater ability to see objects that are more distant. Microscopes work with a similar idea but are concerned with size, not distance. Microscopes enlarge very small objects that are close to the viewer. ";
}

window.show19ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Using Prisms:";
    document.getElementById("reading5").innerHTML = " Prisms are a very special type of lens. When refraction is at work in a prism it breaks the beam of visible light into its basic colors. In visible light, the magic colors you can see are red, orange, yellow, green, blue, indigo, and violet. Scientists say ROY-G-BIV. A prism is made up of two planar surfaces at an angle. It uses the slower speed of light in glass to its advantage by refracting the light twice. Because of the different wavelengths of light, each color is refracted a different amount. When the light ray leaves the prism, it speeds up again (entering the air) and refracts a second time. That second dispersal creates the colorful spectrum of colors.";
}

window.show20ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Pull out Your Pointers:";
    document.getElementById("reading5").innerHTML = " Finally, high tech stuff! Lasers aren\'t so high tech anymore. Lasers have been around since the 1960\'s. You probably even know someone who has one of those laser pointers. A laser is just a really powerful beam of light. Those laser pens aren\'t big on power. However, some lasers in satellites can focus a beam anywhere on the planet. That\'s powerful. Lasers are even used for tests in fusion reactions. Laser isn\'t a word but an acronym. It stands for LIGHT AMPLIFICATION by STIMULATED EMISSION of RADIATION. ";
}

window.show21ch5 = function(){
    document.getElementById("sectionName5").innerHTML = "Exciting Atoms: ";
    document.getElementById("reading5").innerHTML = "The amount of light normally given off by an atom is increased or exaggerated (stimulated). To make the light even stronger, the source atoms are special and are selected to give off only one wavelength of light. That\'s why it\'s usually one color. All of these effects work together to make the light well defined and very focused. You\'ll find lasers every day in medical offices, universities, and construction. How about this acronym: A REALLY STRONG LIGHT CREATED by EXCITED ATOMS? RSLCEA? It doesn\'t quite flow off your tongue, does it? Better stick with laser. Lasers don\'t start with a light bulb and a magnifying glass. It\'s all about energy levels. We\'ve got a picture of the rough set up. The atoms are excited by a flow of electricity. When the atoms are excited, they increase in energy. When the energy in the atoms drops, photons are released. And bang! Light. Okay, we admit it\'s not that simple, but it does give you the basic ideas. Remember the description of the acronym 'LASER' and the term 'stimulated emission?' The idea is that you pump energy into the laser and push electrons to higher energy levels. Then you stimulate them to change to a lower energy level and release of energy/photons. The released photons are reflected back and forth, and on each pass, more photons are added. That\'s the whole 'amplification' part of the word laser. You start with one photon, pump in energy to excite an atom, and when the atom returns to its original energy level, it releases an additional photon (now there are two photons). Repeat as needed. When you get the desired number of photons, release them all in one burst.";
}


window.show1ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Moving Electrons and Charges: ";
    document.getElementById("reading6").innerHTML = "In electricity, negative charges build and then move to the positive region. Electricity is related to charges, and both electrons and protons carry a charge. The amount of the charge is the same for each particle, but opposite in sign. Electrons carry a negative charge while protons carry positive charge. The objects around us contain billions and billions of atoms, and each atom contains many protons and electrons. The protons are located in the center of the atom, concentrated in a small area called the nucleus. The electrons are in motion outside of the nucleus in orbitals. The protons are basically trapped inside the nucleus and can\'t escape the nucleus. As a result, it is moving electrons that are primarily responsible for electricity. There aren\'t a lot of places that you can see electricity. The most commonly- observed form of electricity is probably lightning. Lightning is a big spark that occurs when lots of electrons move from one place to another very quickly. There are three basic forms of lightning, cloud to cloud, cloud to surface, and surface to cloud. All are created when there is an unequal distribution of electrons. You can also see smaller sparks of electricity in science labs that contain Van de Graff generators, and can see even smaller arcs of electrons at home when you scuff your feet and then touch something like a metal doorknob (static electricity). ";
}

window.show2ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Electricity Around You:";
    document.getElementById("reading6").innerHTML = " It\'s easy to see the uses of electricity around you. In fact, there are charges around your computer, your house, and your city. Electricity is constantly flowing through all of the wires in your town. There is also electricity in your flash light. That kind of electricity created by batteries is called direct current. The other major type is found in the outlets of your house. That household form of electricity is called alternating current.";
}

window.show3ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Separating Charges: ";
    document.getElementById("reading6").innerHTML = "The belt of a van de graff generator deposits positive charges. Atoms start out with the same number of negative charges (electrons), and positive charges (protons). Under certain conditions, electrons can be removed from, or added to atoms. Removing electrons would leave the atom with more positives than negatives, and we call this a positive ion (An ion is a charged atom). Conversely, adding electrons to an atom would result in a negative ion. If you do this enough times, you can make an object positive or negative. Friction is one of the ways to separate charge. Have you ever had a science lab where you rub fur on glass rods, or try to make static cling? When you do that rubbing, you are actually rubbing electrons off one object and onto another. When you scuff your feet on the rug, especially in the winter, you can often charge yourself. Clothes tumbling in the dryer often cling together and crackle when you separate them. Lightning is produced, in part, because of air blowing over land. You can also use batteries to separate charge. ";
}

window.show4ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Static Charges:";
    document.getElementById("reading6").innerHTML = " Charges build but do not move in a world of static electricity. Electrons can move more easily in some objects than in others. If you put a charge on things like glass, plastic, rubber, and wood, that charge stays where you put it. We say the charges are static, and we call this static electricity. Materials like glass and plastic are called insulators, or nonconductors. Static electricity can happen on a dry winter day when you walk across a carpet. You are actually building up loads of electrons on your skin. Charges don\'t 'want' to stay separated, however. There is always a tendency for charges to return to their original locations, and all that is needed is a pathway for charges (electrons) to use. When you touch a metal doorknob, for example, electrons can jump and give you a shock. Static charges build up on clouds until they can hold no more. At that point, lightning can occur. The study of electricity where the charges are not moving is called electrostatics.";
}

window.show5ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Conductors and Conductivity:";
    document.getElementById("reading6").innerHTML = " The smoother top path shows a good conductor. The bottom shows a poor conductor. There are many materials that allow charges to move easily. They are called conductors. Conductors have the quality of conductivity. I guess that\'s not a lot of help for you. The reality is that you just need to understand the difference between those two words. The conductor is the object that allows charge to flow. Conductivity is a quality related to the conductor. A material that is a good conductor gives very little resistance to the flow of charge. This flow of charge is called an electric current. A good conductor has high conductivity. ";
}

window.show6ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Different Types of Conductors:";
    document.getElementById("reading6").innerHTML = "  (1)	Metals are traditional conducting materials. You see them around the house all of the time. It\'s a metal wire or one of the metal prongs in an electric plug. There are a lot of free electrons in metallic conductors. Free electrons are electrons that are not being held in atoms, and so, can move easily. Some of the best metallic conductors are copper (Cu), silver (Ag), and gold (Au). Charges easily move along conductive wires to reach positive regions. (2) There are some conductors that are not metals. Carbon is the best example. (3) You\'ve probably seen ionic conductors in a lab or in an experiment. When you think about ionic conductors, think about solutions and molten conductors. A solution such as saltwater has a lot of free ions floating around. Those ions (charged atoms) can flow easily, and ionic solutions are very good conductors. One of the reasons you need to get out of the water if there is lightning around, is that water normally contains dissolved ions, and if lightning hits the liquid (solution), it might conduct electricity long distances and electrocute you. (4) Semi-conductors are the conductors that make your computer possible. If it weren\'t for semi-conductors, most electronic doodads couldn\'t be made. Semiconductors have free electrons, but not as many as conductors, and they are not as easy to get moving. Semiconductors have low conductivities. Examples are elements like silicon (Si) and germanium (Ge).";
}

window.show7ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Let Them Move:";
    document.getElementById("reading6").innerHTML = " Positive and negative charges are attracted to each other while two similar charges are repulsed. So what happens if you have separated charges and you connect them with conducting material? Providing a path for charges to move, and making that path out of materials that allow easy movement, results in a flow of charge (electrons) called a current. The electrons will flow from a location that is negative to one that is positive. This can happen quickly and then stop, as with a spark. Or, in the case of a battery connected to a conducting loop (called a circuit. ), it continues to happen until the battery runs out of energy. If the current goes in one direction all the time, it is called DC, or direct current. In your home, however, the same charges move back and forth, so this is called AC, or alternating current. ";
}

window.show8ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Force of Charges:";
    document.getElementById("reading6").innerHTML = " Electric force increases as the distance between two charges decreases. Scientists discovered that opposite charges attract, and like charges repel. So positive-positive and negative-negative would repel, while positive-negative would attract. Physicists use the term electric force to describe these attractions and repulsions. The electric forces are much stronger when negative charges are closer to positive charges. The further apart two charges are, the weaker the electric force. Also, the greater the charges, the greater the electric force will be.";
}

window.show9ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Field Basics:";
    document.getElementById("reading6").innerHTML = " Electrons move towards a positive charge and away from a negative charge. Scientists understood why forces acted the way they did when objects touched. The idea that confused them was forces that acted at a distance without touching. Think of examples such as gravitational force, electric force, and magnetic force. To help them explain what was happening, they used the idea of 'field'. They imagined that there was an area around the object, and anything that entered would feel a force. We say, for example, that the Moon has a gravitational field around it, and if you get close to the Moon, it will pull you down to its surface. ";
}

window.show10ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Electric Fields:";
    document.getElementById("reading6").innerHTML = " An electric field describes the funky area near any electrically-charged object. Scientists don’t use the word 'funky', but it works. It could also be called an electrostatic field. Any other charge that enters that area will feel a force, and the original object will also feel that force (Newton\'s Third Law). It\'s kind of like a spider sitting at the center of a web. Magentic field lines of repulsion. A normal field is a vector, and is represented by arrows. The Earth\'s (or any planet\'s) gravitational field would be drawn as arrows pointing toward the ground. A field vector shows the direction of the effect on an object entering the field. Gravity acts downward. For an electric field, things are a little more complicated, since there are two kinds of charges, and some combinations attract while others repel. In order to be in agreement with each other, physicists decided that they would always use positive charges to determine the direction of the effect of a field. So, if the central charge was positive, and you put another positive charge near it, that second charge would be repelled outward. So the field vectors for a central positive charge point outward. If the central charge is negative, a positive charge placed nearby would be attracted toward the center charge, so the field vectors for a central negative charge point inward. Electric fields increase in strength as charged particles move closer to each other. Since fields are directly related to the forces they exert, their strength decreases with distance, and increases with the size of the charge producing the field. When you put charges near one another, their fields interact and change shape. This results in changes in the PE of the objects, and generates forces of repulsion or attraction. Electric fields can also be created by magnetic fields. Magnetism and electricity are always connected. We\'ll talk about magnetic fields in the next section.";
}

window.show11ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Magnetic Field Basics:";
    document.getElementById("reading6").innerHTML = " Magnetic fields are different from electric fields. Although both types of fields are interconnected, they do different things. The idea of magnetic field lines and magnetic fields was first examined by Michael Faraday and later by James Clerk Maxwell. Both of these English scientists made great discoveries in the field of electromagnetism. Magnetic fields are areas where an object exhibits a magnetic influence. The fields affect neighboring objects along things called magnetic field lines. A magnetic object can attract or push away another magnetic object. You also need to remember that magnetic forces are NOT related to gravity. The amount of gravity is based on an object\'s mass, while magnetic strength is based on the material that the object is made of. If you place an object in a magnetic field, it will be affected, and the effect will happen along field lines. Many classroom experiments watch small pieces of iron (Fe) line up around magnets along the field lines. Magnetic poles are the points where the magnetic field lines begin and end. Field lines converge or come together at the poles. You have probably heard of the poles of the Earth. Those poles are places where our planets field lines come together. We call those poles north and south because that\'s where they\'re located on Earth. All magnetic objects have field lines and poles. It can be as small as an atom or as large as a star. ";
}

window.show12ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Attracted and Repulsed:";
    document.getElementById("reading6").innerHTML = " You know about charged particles. There are positive and negative charges. You also know that positive charges are attracted to negative charges. A French scientist named Andre-Marie Ampere studied the relationship between electricity and magnetism. He discovered that magnetic fields are produced by moving charges (current). And moving charges are affected by magnets. Stationary charges, on the other hand, do not produce magnetic fields, and are not affected by magnets. Two wires, with current flowing, when placed next to each other, may attract or repel like two magnets. It all has to do with moving charges. ";
}

window.show13ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Earth\'s Magnetic Field:";
    document.getElementById("reading6").innerHTML = " The Earth\'s magnetic field extends from the north to the south pole. Magnets are simple examples of natural magnetic fields. But guess what? The Earth has a huge magnetic field. Because the core of our planet is filled with molten iron (Fe), there is a large field that protects the Earth from space radiation and particles such as the solar wind. When you look at tiny magnets, they are working in a similar way. The magnet has a field around it. As noted earlier, current in wires produces a magnetic effect. You can increase the strength of that magnetic field by increasing the current through the wire. We can use this principle to make artificial, adjustable magnets called electromagnets, by making coils of wire, and then passing current through the coils.";
}

window.show14ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Flowing Electrons:";
    document.getElementById("reading6").innerHTML = " Comparing paths of low current and high current. Electric current is very similar to a flowing river. The river flows from one spot to another and the speed it moves is the speed of the current. The size of the current flow is related more to the size of the river than it is to the speed of the river. A river carries more water each second than a stream, even if both flow at the same speed. With electricity, current is a measure of the amount of charge transferred over a period of time. Current is a flow of electrons, or individual negative charges. When charge flows, it carries energy that can be used to do work. Scientists measure current with units called amperes. ";
}

window.show15ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Current and Heat: ";
    document.getElementById("reading6").innerHTML = "The smoother path on the top generates less heat than the difficult bottom path. One of the results of current is the heating of the conductor. When an electric stove heats up, it\'s because of the flow of current. The electrons have a mass (however small), and when they move through the conductor, there are collisions that produce heat. The more electrons bumping into the atoms of the conductor, the more heat is created, so higher current generally means greater heat. Scientists used to think that the flow of current always heated up the object, but with modern superconductors, that is not always true, or at least not as true as with normal materials. Superconducting materials seem to have less interaction between atoms and current, so the moving charges lose much less energy. ";
}

window.show16ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Spaces Between Atoms: ";
    document.getElementById("reading6").innerHTML = "Everything that is matter can conduct electricity, but not everything does it well. Scientists use the terms conductors, insulators, and semi-conductors. The labels are used to describe how easily energy is transferred through the object by moving charge. The spaces between the atoms, as well as the type of atoms, determines whether an object a good conductor or a good insulator (poor conductor). "
}

window.show17ch6 = function(){
    document.getElementById("sectionName6").innerHTML = "Usable Current: ";
    document.getElementById("reading6").innerHTML = "Current direction in direct and alternating currents. There are two main kinds of electric current, direct current (DC) and alternating current (AC). They are easy to remember. Direct current is a flow of charge always in one direction. Alternating current is a flow of charge back and forth, changing its direction many times in one second. Batteries produce DC current, while the outlets in our homes use AC current. Be very careful if you work with electricity. NEVER touch the plugs in your house. That electricity is very powerful and it can hurt you… badly. Electricity from batteries can also injure you. We have burned ourselves when working with batteries and electromagnets, so we know what can happen. To be safe, go get an adult to help you with any experiments.";
}


window.show1ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "Resisting Current:";
    document.getElementById("reading7").innerHTML = " The collisions between electrons and atoms in a conductor cause resistance to the flow of charge. We measure that resistance in order to determine the effect that it will have on current. Scientists measure resistance in ohms (rhymes with homes). There is a magical little formula used to figure out the resistance in an electrical system. That formula is called Ohm\'s Law, V=IR. ";
}

window.show2ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "Measuring Resistance:";
    document.getElementById("reading7").innerHTML = " Less work is possible when resistance is high. The symbol 'V' is used to represent something called the potential difference. Potential difference is the amount of work done in moving a charge between two points, divided by the size of the charge. That\'s kind of complicated, though. You can think of potential as electrical height. High potential (near positive charge) is kind of like being on top of a hill. Low potential (near negative charge) is kind of like being in a valley. So potential difference indicates the difference in electrical height between two points. The greater that difference, the more likely it is that charge will move. The potential difference is measured in volts, and potential is commonly referred to as voltage. 'I' is the symbol for current and 'R' is the symbol for the resistance of the system. Current is measured in amperes and resistance is measured in ohms. How can you think of resistance? Have you ever gone to a baseball game? Between innings, we like going to get some food. There are always people between the counter and us. Resistance to current is similar to you trying to make your way through the crowds to get your hot dog. You have to weave your way through the people to reach your goal. The more people in your way, the more resistance. If everyone is in their seats it is super-easy to get your food. There would be very little resistance. V=IR Let\'s go back to that equation and look at it in terms of resistance. When you move the values around you get R=V/I. In English that means the resistance of a system is based on voltage and current. Not all conductors follow Ohm\'s law. Resistance is also based on the resistivity of a material. The resistivity of a material changes because of chemical makeup or the temperature. Copper is a better conductor than wood so copper would have lower resistivity. That resistivity combines with (1) the distance and (2) the space that charges have to move in (thin vs. thick wires) to affect the 'R' value. Greater length results in more resistance, and thick wires result in less. When people connect speakers, they usually use wires that are as short and thick as possible. ";
}

window.show3ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "Knocking Electrons Around:";
    document.getElementById("reading7").innerHTML = " In metals, electrons carry the charges of the current as it flows. What stops the electrons? What offers the resistance to that current? Nothing allows a perfect flow of current, not even superconductors. In metal, there are tiny flaws. You can\'t see them because they are on a molecular level. Those imperfections cause the electrons to collide with the metal atoms. When they hit the metal, the electrons lose energy. Where does that energy go? It is usually turned into heat. You can watch a hot plate heat up, or maybe a stove top. They heat up because of the collisions between electrons and the metal. Imperfections mean collisions; collisions mean heat.";
}

window.show4ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "Faraday Basics:";
    document.getElementById("reading7").innerHTML = " A changing magnetic field can create an electric current. Faraday\'s law of induction is one of the important concepts of electricity. It looks at the way changing magnetic fields can cause current to flow in wires. Basically, it is a formula/concept that describes how potential difference (voltage difference) is created and how much is created. It\'s a huge concept to understand that the changing of a magnetic field can create voltage. ";
}

window.show5ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "Faraday\'s Work:";
    document.getElementById("reading7").innerHTML = " Michael Faraday was an English physicist working in the early 1800\'s. He worked with another scientist named Sir Humphrey Davy. Faraday\'s big discovery happened in 1831 when he found that when you change a magnetic field, you can create an electric current. He did a lot of other work with electricity such as making generators and experimenting with electrochemistry and electrolysis. Faraday\'s experiments started with magnetic fields that stayed the same. That setup did not induce current. It was only when he started to change the magnetic fields that the current and voltage were induced (created). He discovered that the changes in the magnetic field and the size of the field were related to the amount of current created. Scientists also use the term magnetic flux. Magnetic flux is a value that is the strength of the magnetic field multiplied by the surface area of the device. ";
}

window.show6ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "Faraday's Law:";
    document.getElementById("reading7").innerHTML = " You\'re going to have to review your Greek letters when you memorize the real formula. Here are the basics... E=dB/dt. As the magnetic field increases, the voltage created increases. 'E' is the value of voltage induced (the old name for voltage was 'ElectroMotive Force', or EMF. That\'s the 'E' in the equation). The change in time for the experiment is 'dt'. Time is measured in seconds. Last is 'dB' which stands for the change in magnetic flux. The magnetic flux is the field lines of the magnetic field. The flux is equal to BA, where B is the magnetic field strength, and A is the area. This formula is a bit harder than those you may have seen before. In English: the amount of voltage created is equal to the change in magnetic flux divided by the change in time. The bigger the change you have in the magnetic field, the greater amount of voltage. ";
}

window.show7ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "Coulomb Basics:";
    document.getElementById("reading7").innerHTML = " Coulomb\'s Law is one of the basic ideas of electricity in physics. The law looks at the forces created between two charged objects. As distance increases, the forces and electric fields decrease. This simple idea was converted into a relatively simple formula. The force between the objects can be positive or negative depending on whether the objects are attracted to each other or repelled. Charges that are closer together create greater forces. Think about a few concepts before you continue reading. Some charges are attracted to each other. Positive and negative charges like to move towards each other. Similar charges such as two positive or two negative push away from each other. You also need to understand that forces between objects become stronger as they move together and weaker as they move apart. You could yell at someone from far away, and they would barely hear you. If you yelled the same amount when you were together, it would be more powerful and loud. ";
}

window.show8ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "Coulomb\'s Work:";
    document.getElementById("reading7").innerHTML = " Charles Augustin de Coulomb was a French scientist working in the late 1700\'s. A little earlier, a British scientist named Henry Cavendish came up with similar ideas. Coulomb received most of the credit for the work on electric forces because Cavendish did not publish all of his work. The world never knew about Cavendish\'s work until decades after he died. ";
}

window.show9ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "Coulomb\'s Law: ";
    document.getElementById("reading7").innerHTML = "As charges increase, the forces increase. But you\'re here to learn about the law. When you have two charged particles, an electric force is created. If you have larger charges, the forces will be larger. If you use those two ideas, and add the fact that charges can attract and repel each other you will understand Coulomb\'s Law. It\'s a formula that measures the electrical forces between two objects.F=kq1q2/r2. 'F' is the resulting force between the two charges. The distance between the two charges is 'r.' The 'r' actually stands for 'radius of separation' but you just need to know it is a distance. The 'q1' and 'q2' are values for the amount of charge in each of the particles. Scientists use Coulombs as units to measure charge. The constant of the equation is 'k.' As you learn more physics, you will see that this formula is very similar to a formula from Newton\'s work with gravity.";
}

window.show10ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "What is a Magnet?:";
    document.getElementById("reading7").innerHTML = " A bar magnet and its field lines. A magnet is an object or a device that gives off an external magnetic field. Basically, it applies a force over a distance on other magnets, electrical currents, beams of charge, circuits, or magnetic materials. Magnetism can even be caused by electrical currents. While you might think of metal magnets such as the ones you use in class, there are many different types of magnetic materials. Iron (Fe) is an easy material to use. Other elements such as neodymium (Nd) and samarium (Sm) are also used in magnets. Neodymium magnets are some of the strongest on Earth. ";
}

window.show11ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "Different Types of Magnets:";
    document.getElementById("reading7").innerHTML = " Horseshoe magnet. There are many different types of magnets. Permanent magnets never lose their magnetism. There are materials in the world that are called ferromagnetic. Those materials are able to create and hold a specific alignment of their atoms. Since many atoms have a magnetic moment (tiny magnetic field), all of the moments can add up to create a magnet. Scientists use the word hysteresis to describe the way the atoms stay aligned. Most of the magnets you see around you are man-made. Since they weren\'t originally magnetic, they lose their magnetic characteristics over time. Dropping them, for example, weakens their magnetism; as does heating them, or hammering on them, etc. There are also air-core magnets. Air-core magnets are created by current flowing through a wire. That current produces the magnetic field. You create an air-core magnet by wrapping miles of wire around in a doughnut shape (toroid). When you send current through the wire, a magnetic field is created inside of the doughnut. Scientists sometimes use air-core magnets to study fusion reactions. Electromagnets are different because they have a ferromagnetic material (usually iron or steel) located inside of the coils of wire. The core isn\'t air, it is something that aids in producing magnetic effects, so electromagnets are typically stronger than a comparable air-core magnet. Air-core and electromagnets can be turned on and off. They both depend on currents of electricity to give them magnetic characteristics. Not only can they be turned on and off, but they can also be made much stronger than ordinary magnets. You might see an electromagnet at work in a junkyard lifting old cars off the ground.";
}

window.show12ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "A Direct Current:";
    document.getElementById("reading7").innerHTML = " Direct current flows in one direction. There are two main types of current in our world. One is direct current (DC) which is a constant stream of charges in one direction. The other is alternating current (AC) that is a stream of charges that reverses direction. Let\'s look at DC power which was refined by Thomas Edison in the 1800s. ";
}

window.show13ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "Moving in One Direction:";
    document.getElementById("reading7").innerHTML = " The current in DC circuits is moving in a constant direction. The amount of current can change, but it will always flow from one point to another. Before we move on, we need to explain that physicists, as well as electricians, refer to something called conventional current. Do you remember that we talked about physicists agreeing to always use positive charges to determine how electric field lines would be drawn? Following through on that agreement, they also agreed to explain charge flow in terms of positive charges rather than electrons. So although electrons would flow from negative to positive, by convention (agreement), physicists refer to conventional current as a flow from high potential/voltage (positive) to low potential/voltage (negative). Reminding you that potential is like electrical height, this means that conventional current flows 'downhill', which makes sense. Current moves in the opposite direction of charged particles. Electrons move from areas where there are excess of negative charges to areas where there are a deficiency (or positive charge). Electrons move from '-' to '+', but conventional current is considered to move in the other direction. When you set up a circuit, conventional current is considered to move from the '+' to the '-' side. The idea about using positive charges in forming explanations comes from Benjamin Franklin. In Franklin\'s day, we didn\'t know about protons and electrons. Franklin believed that something moved through electrical wires, and he called these things 'charge'. He assumed there was only one kind of charge, and he logically assumed that charge would flow from a spot that had an excess (extra), to a spot that had a deficiency (too few). He called the spot with an excess 'positive' and the spot with a deficiency 'negative'. So, for Franklin, charge flowed from positive to negative. We simply honor his achievements by continuing with this idea. ";
}

window.show14ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "Battery Basics:";
    document.getElementById("reading7").innerHTML = " Batteries are a great example of a direct current power source. The best real-life example of direct current is a battery. Batteries have positive (+) and negative (-) terminals. If you take a wire and connect the positive and negative terminals on a battery, the electrons in the wires will begin to flow to produce a current. You can prove that the current is flowing if you connect a small light to the circuit. The light will begin to glow as the electrons pass through the filaments. DC power is used all over the world. You will probably use direct current power whenever you carry something around that uses electricity. Everything that uses batteries runs on DC power. Other countries use more portable power supplies because they might not have electric wiring in their houses. That electric wiring in your house is AC power and it is completely different than DC. There are machines that can convert DC to AC power. Those machines might be used to take a DC battery in a boat and convert the power to AC so that a refrigerator can use it.";
}

window.show15ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "An Alternating Current:";
    document.getElementById("reading7").innerHTML = " Alternating current switches direction while direct current only moves in one direction. There are two main types of current in our world. One is direct current (DC), which is a constant stream of electrons in one direction. The other is alternating current, which is a stream of charges that reverses direction. Scientists such as Charles Proteus Steinmetz and Nikola Tesla made great advances when AC power was just a science experiment. ";
}

window.show16ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "Flowing Back and Forth:";
    document.getElementById("reading7").innerHTML = " Charges (electrons) must always be flowing to have a current. However, the flow of charges does not always have to be in one direction. In alternating current, the charges move in one direction for a very short time, and then they reverse direction. This happens over and over again. Low frequency and high frequency wavelengths. Scientists describe the cycle of switching directions as the frequency. Frequency is measured in Hertz (Hz). Currents that cycle more often during a specific amount of time are said to have a higher frequency. AC power cycles 60 times per second in the US. Since the web is a global resource, we should also mention that there are different alternating current frequencies across the world. While we all use alternating current, the switching happens different amounts during a specific time period. Most countries use AC frequencies at either 50 hertz or 60 hertz. ";
}

window.show17ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "Cheaper and Stronger:";
    document.getElementById("reading7").innerHTML = " High-tension powerlines carry power to cities all over the world. Why do we use AC power all over the world? It\'s cheaper and easier to make devices for AC power. It is less expensive because you can increase and decrease the current for AC power very easily. The power switches for AC power are also less expensive to manufacture. Probably the biggest advantage of AC is that you can use high voltages with small currents to reduce losses when you transmit power. Remember that lost energy increases the more collisions you have, and reducing current decreases the amount of collisions (and reduces heating in the wires). You can send power with DC, but the DC power transmission loses a lot of energy. You would have to put much more effort into sending DC power over the same distance. ";
}

window.show18ch7 = function(){
    document.getElementById("sectionName7").innerHTML = "Alternating Around You:";
    document.getElementById("reading7").innerHTML = " BIG NOTE: NEVER touch the outlets in your house. You will get electrocuted. There is more to electricity than voltage. It\'s the current that will kill you. The easiest place to see AC power in action is in your house. All of the appliances and lights in your house probably run off of AC power. There are also power converters that change DC power into AC power when you need electricity and there are no plugs around (like camping).";
}


window.show1ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Where Traditional Physics Stops:";
    document.getElementById("reading8").innerHTML = " We\'re about to move into the modern age of physics. In the early 1800\'s, scientists began examining the basis of matter, space, and time. Sometimes it gets very confusing, but the big idea is that Newton\'s physics describe about 90% of the way things work in the universe (mechanics). His ideas start to break down when you talk about ideas such as objects moving at the speed of light, the inside of atoms, extreme temperatures, and when the objects are huge (like galaxies interacting with each other).";
}

window.show2ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Into the Atom:";
    document.getElementById("reading8").innerHTML = " The original idea of atoms developed by Niels Bohr showed a structure based on various shells and a center area called the nucleus. The electrons were found in those shells while the protons and neutrons were found in the nucleus. There are other ways to look at the structure of atoms (you may have heard of 'spdf'), but we\'re going to stick with the classic view for many of our discussions. This view of the structure of an atom was one of the foundations for modern physics. ";
}

window.show3ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Into the Universe:";
    document.getElementById("reading8").innerHTML = " Albert Einstein also played a large part in modern physics. He developed formulas that described the way matter and energy were related. Just about everyone has heard of the formula E=mc^2. That formula explains how energy is related to mass. The idea found its way into the study of fission reactions, and it was proved that enormous amounts of energy were stored in even one atom of a substance. ";
}

window.show4ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Current Studies:";
    document.getElementById("reading8").innerHTML = " Even now, scientists are still testing the boundaries of physics and the laws of physics. Only a few years ago a new state of matter was created. The Bose-Einstein condensate was theorized decades ago, but scientists have only recently been able to create it in a lab. Every day astronomers are studying space and learning how black holes and galaxies interact. Stephen Hawking is one of the more famous scientists working in that field. Our point is, there is still much to discover.";
}

window.show5ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Looking at the Nucleus:";
    document.getElementById("reading8").innerHTML = " While atomic physics deals with atoms as a whole, nuclear physics deals specifically with the nucleus of the atom. Physicists still need to understand the area around the nucleus, but they are more concerned with the forces at work keeping that nucleus together. Once they understand those forces, they often try to create new types of fusion and fission reactions. ";
}

window.show6ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "It's Splitsville: ";
    document.getElementById("reading8").innerHTML = "Nuclear energy is the energy released when the nuclei of atoms split or are fused. The nucleus is made up of protons and neutrons. Nuclear forces hold all of the pieces together. Fusion is when two nuclei come together. Fission is when one nucleus is split into two or more parts. Huge amounts of energy are released when either of these reactions occurs. Fusion reactions create much of the energy given off by the Sun. There are even smaller particles that make up the protons and neutrons that physicists are studying every day. ";
}

window.show7ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Antimatter:";
    document.getElementById("reading8").innerHTML = " Since we are talking a little about atomic and nuclear physics, we wanted to tell you about antimatter. It is not just found in television shows. Scientists have discovered evidence that it is real. While a regular atom has positive and neutral pieces (protons/neutrons) in the nucleus and negative pieces in orbiting clouds (electrons), antimatter is just the opposite. Antimatter has a nucleus with a negative charge and little positive pieces in the orbits. Those positively charged pieces are called positrons.";
}

window.show8ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Looking into Atoms:";
    document.getElementById("reading8").innerHTML = " Quantum physics is a branch of physics that works with the activities going on inside of atoms. They talk about subatomic particles interacting with each other. We\'re starting to talk about Albert Einstein and Max Planck\'s ideas here. In the early 1900\'s, scientists were beginning to examine the inside of atoms. They were wondering what was going on inside those things that were once thought to be solid. One big idea they came up with was that the energy of an electron depends on the frequency, or wavelength, of the EM Radiation. Another interesting idea they discovered was that energy didn\'t depend on the intensity, or amount, of radiation. If you apply this idea to the structure of an atom, in the older, Bohr model, there is a nucleus and there are rings (levels) of energy around the nucleus. The length of each orbit was related to a wavelength. No two electrons can have all the same wave characteristics. Scientists now say that electrons behave like waves, and fill areas of the atom like sound waves might fill a room. The electrons, then, exist in something scientists call 'electron clouds'. The size of the shells now relates to the size of the cloud. This is where the spdf stuff comes in, as these describe the shape of the clouds. ";
}

window.show9ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Packets of Energy:";
    document.getElementById("reading8").innerHTML = " During the early 1900\'s scientists also discovered that EM radiation not only moves like a wave, but has packs of energy (quanta) as well. It\'s like a stream of individual packets. ";
}

window.show10ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "The Uncertainty Principle:";
    document.getElementById("reading8").innerHTML = " A German scientist named Werner Heisenberg came up with this idea called the uncertainty principle. He figured that the position and momentum of an atomic particle cannot both be observed accurately at the same moment in time. The idea shows that because these pieces are so small, whatever device you use to measure the particles will affect them. Think about it. If you use light to examine a piece of light, won\'t you knock it around? Well now you just lost the idea of position. What if you freeze it in place? That\'s all very well, but now you don\'t know where it was going, or how much momentum it had. When you increase the precision of one measurement, the other measurement will suffer. Look at the Heisenberg uncertainty principle in a more general way using the observer effect. While Heisenberg looks at measurements, you can see parallels in larger observations. You can not observe something naturally without affecting it in some way. The light and photons used to watch an electron would move the electron. When you go out in a field in Africa and the animals see you, they will act differently. If you are a psychiatrist asking a patient some questions, you are affecting him, so the answers may be changed by the way the questions are worded. Field scientists work very hard to try and observe while interfering as little as possible.";
}

window.show11ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Releasing Particles:";
    document.getElementById("reading8").innerHTML = " Radioactivity occurs when an atomic nucleus breaks down into smaller particles. There are three types of nuclear radiation: alpha, beta, and gamma. Alpha particles are positively charged, beta particles are negatively charged, and gamma particles have no charge. The radiations also have increasing levels of energy, first Alpha, then Beta, and finally Gamma, which is the most energetic of all these. Alpha and Beta are particles, but Gamma is a wave. ";
}

window.show12ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Half of a Life:";
    document.getElementById("reading8").innerHTML = " When a radioactive nucleus changes, the remaining nucleus (and atom) is not the same as it was. It changes its identity. The term half-life describes the time it takes for half of the atoms in a sample to change, and half to remain the same. Let\'s say you have 100g of uranium (don\'t try this at home, it’s radioactive). When 50g remain (and 50g have become something different), the amount of time that has passed is the half-life. Every element has its own unique half-life. The half-life of uranium-235 is 713,000,000 years. The half-life of uranium-238 is 4,500,000,000 years. That is a long time to wait for radioactive atoms to change, and many of the things that the original atoms change into are ALSO radioactive and dangerous! There is even a radioactive isotope of carbon, carbon-14. Normal carbon is carbon-12. C-14 has two extra neutrons and a half-life of 5730 years. Scientists use C-14 in a process called carbon dating. This process is not when two carbon atoms go out to the mall one night. Carbon dating is when scientists try to measure the age of very old substances. There are very small amounts of C-14 in the atmosphere. Every living thing has some C-14 in it. Scientists measure the amount of C-14 in the things they dig up to estimate how old they are. They rely on the half-life of 5730 years to date the object. ";
}

window.show13ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "A Danger to DNA:";
    document.getElementById("reading8").innerHTML = " Radioactivity is generally not good for living organisms. There are times that radiation passes right through organisms with no effect, but there are other times that it hits DNA or affects replicating cells. Bad things can happen when DNA is exposed to radiation. One result of moderate levels of radioactive particles can be cancer. Cells reproduce in ways that are not normal. High doses of radioactivity can kill a human within 24 hours. Medicine, however, has learned how to use radioactivity to stop cancers. Since they know that excess levels of radioactivity can kills cells, doctors target areas of cancer with radioactivity to stop the cancer cells from dividing.";
}

window.show14ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Splitting Up:";
    document.getElementById("reading8").innerHTML = " Fission is the splitting of an atom. Not all atoms will go through fission; as a matter of fact, very few do under normal circumstances. A small percentage of Uranium atoms have an atomic mass of 235 amu (atomic mass units). Only U-235 undergoes fission, so these atoms must be separated from the far more numerous U-238 atoms. The difficulty and cost of completing this separation is what has prevented most countries from having nuclear weapons (thank goodness). In a nuclear reaction, scientists shoot a whole bunch of neutrons at uranium-235 atoms. When one neutron hits the nucleus, the uranium becomes U-236. When it becomes 236, the uranium atom wants to split apart. After it splits, it gives off three neutrons and a lot of energy. Those neutrons hit three other U atoms in the area and cause them to become U-236. Each cycle, the reaction gets three times bigger. A reaction that, once started, continues by itself, is called a chain reaction. A chain reaction that keeps getting bigger is called an uncontrolled chain reaction. Left alone, and with sufficient U-235 (which you do not have in a reactor), the energy would grow large enough to cause an explosion – A BIG one! The worst that can happen with a nuclear reactor that gets out of control would be a melt down; which is plenty bad, but not as bad as an explosion. ";
}

window.show15ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Fizz vs. Fuse:";
    document.getElementById("reading8").innerHTML = " When we were kids we always got fusion and fission confused. The confusion wasn\'t because the processes were similar; the words were just similar. You need to remember that one process is a breaking down process and the other is a process of building up. When things fuse (fusion), you start with smaller objects (tritium, deuterium) and build larger objects (helium). When things 'fiss' or break down, you start with a larger object (uranium) and finish with smaller objects (strontium, calcium, barium, etc). ";
}

window.show16ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Isotope Action:";
    document.getElementById("reading8").innerHTML = " Why do we say that atoms are radioactive? There is another isotope of uranium with the number 238. When one of those free neutrons hits a 238, it will bump it up to 239 (that just makes sense). But that 239 is radioactive and releases a beta particle when it decays. It\'s not over. That U-239 breaks down into neptunium-239. The neptunium is also radioactive. It will release another beta particle when it breaks down into plutonium-239. The plutonium will eventually give off an alpha particle (not as strong as beta and less dangerous). That\'s a lot of particles being given off. ";
}

window.show17ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Einstein's Legacy:";
    document.getElementById("reading8").innerHTML = " The fission process, however radioactive it is, is the main reaction that happens in many nuclear devices. It all started with Einstein\'s equation E=mc^2. As soon as scientists thought there were huge amounts of energy available in each atom of the universe, the military began to develop weapons that had enormous destructive abilities. Usually uranium or plutonium is in the bomb and a smaller explosion of material that surrounds the uranium and plutonium sets off the fission reaction. They have even developed fusion bombs that are set off by a fission reaction.";
}

window.show18ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Bringing Together:";
    document.getElementById("reading8").innerHTML = " Fusion is the process of two small atomic nuclei coming together to make a larger nucleus which is stable. The simplest nuclei to use are deuterium and tritium (isotopes of hydrogen). Scientists find deuterium in the oceans, so it\'s pretty easy to find if you know where to look. ";
}

window.show19ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Look in the Sky:";
    document.getElementById("reading8").innerHTML = " The fusion reactions in many stars are different from the reactions we are trying to develop on Earth. Scientists call the fusion process on a star the proton-proton chain reaction. Two protons collide with each other and form something called a deuteron. A third proton then collides with the deuteron to create a helium isotope. Helium isotopes then fuse to make beryllium, which then breaks down. When the beryllium breaks down, two protons are released and the reaction can start again. ";
}

window.show20ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Fizz vs. Fuse:";
    document.getElementById("reading8").innerHTML = " When we were kids we always got fusion and fission confused. The confusion wasn\'t because the processes were similar; the words were just similar. You need to remember that one process is a breaking down process and the other is a process of building up. When things fuse (fusion), you start with smaller objects (tritium, deuterium) and build larger objects (helium). When things 'fiss' or break down, you start with a larger object (uranium) and finish with smaller objects (strontium, calcium, barium, etc). ";
}

window.show21ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Making Fusion a Reality:";
    document.getElementById("reading8").innerHTML = " Fusion reactions need very hot environments to occur. Temperatures hit millions of degrees, like the temperature of the Sun. When you heat a gas, you create plasma. The problem is that we can\'t create a container that can make plasma hot enough to let a fusion reaction occur. To make sure that the plasma doesn\'t really touch the container, scientists use magnetic fields to hold the plasma in place. It\'s like the plasma is just floating, not touching anything. Right now the best container is in the shape of a torus. That\'s like the shape of a doughnut. Compared to a fission reaction, there is very little radioactivity released when a fusion reaction is complete.";
}

window.show22ch8 = function(){
    document.getElementById("sectionName8").innerHTML = "Creating Usable Energy: ";
    document.getElementById("reading8").innerHTML = "Researchers use uranium 235, an isotope of uranium, in many nuclear reactors (In some cases, they use plutonium instead). The uranium comes to the reactor in small pellets. Those pellets then go into fuel rods. The fission reaction produces heat, and the entire reactor has to be cooled by water, so nuclear plants are built near rivers, lakes, etc. Since the reaction keeps growing, and since no one wants a reactor to melt, they have to do more than just cool things off. Since the number of neutrons controls the size of the reaction, you can control the reaction by controlling the neutrons. Reactors use control rods, which absorb neutrons, and insert them into the reactor to keep it under control. The further they insert the rods, the slower/smaller the reaction. When most of the fuel pellets have changed from U-235 to other atoms, the rods are removed and kept in a big pool of water for a year. Then new fuel rods are inserted in their place. After enough time has gone by, and the radioactive materials have cooled down, officials have to bury the nuclear waste deep underground. They bury them so that the radioactivity will not contaminate the surrounding water or land. When biological substances become irradiated by very powerful radiation, they can no longer survive. The result is something called radiation poisoning and nuclear plant workers have to be very careful.";
}