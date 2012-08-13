#pragma strict

function Awake(){
	rigidbody.AddForce(10,10,0,ForceMode.Impulse);
	
	InvokeRepeating("increaseSpeed",2,2); // start at 2 sec, repeat every 2sec
}
function Start () {

}

function OnCollisionEnter(hit : Collision)
{
     if(hit.gameObject.tag == "boundsWall"){
     	Debug.Log("Osui Seinään!");
     }
     else if(hit.gameObject.tag == "breakable"){
     	Debug.Log("Osui Tiileen!");
     }
     else if(hit.gameObject.tag == "Player"){
     	Debug.Log("Osui Mailaan!");
     }
}

function Update () {
	if(transform.position.y <= 295) Application.LoadLevel("mainmenu");
}

function increaseSpeed(){
	rigidbody.velocity *=1.05;
	//Debug.Log("Velo = "+rigidbody.velocity);
}