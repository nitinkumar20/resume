var navbar=document.querySelectorAll('.nav-menu a');

var ide;

for(var it=0;it<navbar.length;it++)
{
   

       navbar[it].addEventListener('click', function(event){

        event.preventDefault();

     var targetSectionId =this.textContent.trim();
      var targetSection =document.getElementById(targetSectionId);

   if(targetSectionId=="Home")return;

   
       ide=setInterval(function()
       	{
       		verticalScroll(targetSection);
       	},20);



   });





}


function  verticalScroll(targetSection)
       	{

       		var ycoordinate=targetSection.getBoundingClientRect().top;

       		if(ycoordinate<=0)
       		{
       			clearInterval(ide);
       			return;
       		}
       		window.scrollBy(0,50);



       	}


       	var skillsContainer=document.getElementById("Skills");
        // if(skillsContainer.getBoundingClientRect().top<=window.minScreen)
       	// console.log(skillsContainer);

       var SkillBars=document.querySelectorAll('.skill-progress > div');

       	window.addEventListener('scroll',checkScroll);
       var isVissible=true;


      function initialise()
      {
      	for(let bar of SkillBars )
      		bar.style.width=0+'%';
      	
      }

      initialise();
      function fillBars()
      {
      	//inintialise divs
      	for(let bar of SkillBars)
      	  {
      	  	let targetWidth=bar.getAttribute("data-max-width");
      	  	let currentWidth=0;

      	  	let intId=setInterval(function(){
                 if(targetWidth==currentWidth)
                 {
                 	clearInterval(intId);
                 	return;
                 }
                 currentWidth++;

                 bar.style.width=currentWidth+'%'



      	  	},4);
      	  } 
      }

      
       function checkScroll()
       {
       	   if(isVissible && skillsContainer.getBoundingClientRect().top<=window.innerHeight)
       	    { isVissible=false; fillBars();}
       	else if(skillsContainer.getBoundingClientRect().top>window.innerHeight)
       	{
       		initialise();
       		isVissible=true;
       	}

       }


      //  var SkillBarOuter=document.querySelectorAll('.skill-progress');


      // function checkScroll()
      // {

      // 	  for(let bar of SkillBarOuter)
      // 	  {
      	  	
      // 	  }

      // }