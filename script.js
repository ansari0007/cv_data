// console.log("cv app");

const data=[
    
    {
        name:"Anurag",
        age:25,
        city:"kolkata",
        language:"python",
        framework:"django",
        profile:"https://randomuser.me/api/portraits/men/75.jpg"
    },

    {
        name:"Abhisek",
        age:29,
        city:"delhi",
        language:"php",
        framework:"larvel",
        profile:"https://randomuser.me/api/portraits/men/76.jpg"
    },

    {
        name:"Ashish",
        age:22,
        city:"noida",
        language:"JS",
        framework:"Angular",
        profile:"https://randomuser.me/api/portraits/men/77.jpg"
    },

    {
        name:"deepika",
        age:28,
        city:"Mumbai",
        language:"js",
        framework:"node",
        profile:"https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
        name:"Aishwrya",
        age:35,
        city:"lucknow",
        language:"python",
        framework:"django",
        profile:"https://randomuser.me/api/portraits/women/76.jpg"
        },

]

function cvIterator(profiles){
	let nextIndex=0;
	return{
		next:function(){
			
			return nextIndex<profiles.length?
			{value: profiles[nextIndex++],done:false}:
			{done:true}
		}
	};
}

const candidates=cvIterator(data);
nextCV();
//let next=document.getElementById("next");
//next.addEventListener('click',nextCV);

function nextCV(){
	const currentCandidate =  candidates.next().value;
	let image=document.getElementById("image");
	let profile=document.getElementById('profile');
	if(currentCandidate != undefined){
	image.innerHTML=`<img src="${currentCandidate.profile}">`;
	profile.innerHTML=`<ul class="list-group">
		<li class="list-group-item active">${currentCandidate.name}</li>
	  <li class="list-group-item">${currentCandidate.age} years old</li>
	  <li class="list-group-item">lives in ${currentCandidate.city}</li>
	  <li class="list-group-item">primarly works on	  ${currentCandidate.language}</li>
	  <li class="list-group-item">uses ${currentCandidate.framework} framework</li>
	  
	</ul>`;
	}
	else{
		alert("End of candidate list");
		window.location.reload();
	}
}