$("#list_team").hide(0)
$('#single_team').hide(0)
class Team{
    constructor(team_name,goals=0,player)
    {
        this.team_name=team_name;
        this.team_goal_count=goals;   
        this.players=[player];
    }
    players_add=(value)=>
    {
       this.players.push(value)
 
    }
}
//GLOBAL DECLARATIONS

var player1 = null;
var player_option;
var player_input_ele;
var team_arr=[]

// Function to add Teams and players

const add_team = () =>
{
    $("#list_team").show(0)
    $('#single_team').show(0)
    var team_input = document.getElementById("t_name").value;
    var team_add = new Team(team_input);
    team_arr.push(team_add)
    player_function(team_add);
    options_body = document.getElementById("team_name_holder")
    options_body_2 = document.getElementById("team_name_holder2")
    options_body_2.innerHTML = '';
    options_body.innerHTML = '';
    team_arr.forEach(element => {
        var options = document.createElement('option');
        var options_for_2 = document.createElement('option')
        options_for_2.innerHTML = element.team_name;
        options_for_2.setAttribute('value', element.team_name)
        options.innerHTML = element.team_name;
        options.setAttribute('value', element.team_name)
        options_body.appendChild(options)
        options_body_2.appendChild(options_for_2)
    })
    document.getElementById("t_name").value='';
    document.getElementById("p_names").value='';
    console.log(team_arr)
}
// callback of player_function from add_team function 

const player_function = (team_add) =>
{
    var input_players=document.getElementById('p_names').value
     var player_array=input_players.split(',');
      player_array.forEach(elem=>{
        team_add.players_add(elem);
    })

}

//function for scoring a goal 

const score_goal = () =>
{
        var select1 = document.getElementById("team_name_holder").value;
        team_arr.forEach(element=>{
            if(element.team_name == select1)
            {
                element.team_goal_count=element.team_goal_count+1;
                console.log(element)
            }
        })
}

//function to show data in table form of all teams

const show_all = () =>
{
   
    var body_row_1= document.getElementById("team_row");
    var body_score = document.getElementById("score_row")
    body_row_1.innerHTML = '';
    body_score.innerHTML = '';
    team_arr.forEach(element =>
        {
                console.log(element)
                var team_row_data = document.createElement('td');
                var score_row_data = document.createElement('td')
                team_row_data.innerHTML = element.team_name
                team_row_data.setAttribute('class','text-info')
                score_row_data.innerHTML = element.team_goal_count;
                body_row_1.appendChild(team_row_data)
                body_score.appendChild(score_row_data)

        })
}

//function to show information of team with select list

const single_team_detail = () =>
{
    var body_team = document.getElementById("single_team")
    var team_selector = document.getElementById("team_name_holder2").value
    team_arr.forEach(element => {
        if(element.team_name == team_selector)
        {
            var team_display = document.createElement('h2')
            team_display.innerHTML = element.team_name +' Goal Scored:'+element.team_goal_count+' players in team'+element.players;
            body_team.appendChild(team_display)
        }
    })
}

