#pragma strict

function Awake(){
	rigidbody.AddForce(10,10,0,ForceMode.Impulse);
	
	InvokeRepeating("increaseSpeed",2,2); // start at 2 sec, repeat every 2sec
}
function Start () {

}

function Update () {
	if(transform.position.y <= 295) Application.LoadLevel("mainmenu");
}

function increaseSpeed(){
	rigidbody.velocity *=1.05;
	Debug.Log("Velo = "+rigidbody.velocity);
}