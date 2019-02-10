$(document).ready(function () {
    //functions for materialize
    $(".dropdown-trigger").dropdown({
        alignment: 'left',
        coverTrigger: false,
        inDuration: 200,
        outDuration: 400
    });
    //populating content
    function populateIntro() {
        var introTitle = $("<p id='intro-headText'><span class='red-text'>Hi</span>!</p>");
        var introContent = $("<p id='intro-text'>My name is <span class='red-text'>Keith</span>. <br>I'm a <span class='red-text'>web developer in training</span>. <br>Welcome to my portfolio site!</p>");
        var introDiv = $("<div class='content'></div>");
        introDiv.attr("value", 1);
        introDiv.append(introTitle).append(introContent);
        return introDiv;
    }

    function populateAbout() {
        var aboutTitle = $("<p id='about-headText'><span class='red-text'>About Me</span>:</p>");
        var aboutContent = $("<p id='about-text'>I got my GED back in 2013 or 14 and i'm just looking to expand my horizon about things in life. </p>")
        var aboutDiv = $("<div class='content'></div>");
        aboutDiv.attr("value", 2);
        aboutDiv.append(aboutTitle).append(aboutContent);
        return aboutDiv;
    }

    function populateContact() {
        var contactTitle = $("<p id='contact-headText' class='red-text'>Contact</p>");
        var contactContent1 = $("<p class='contact-text' class='left-align'>Social Media: </p>");
        var contactContent2 = $("<p class='contact-text' class='left-align' style='padding-bottom: 5%'>Email: <br><span class='red-text'><a href='mailto:keithrollin29@gmail.com'>keithrollin29@gmail.com</a></span></p>")
        var imgrow = $("<div class='row'></div>");
        var githubImgDiv=$("<div class='col s6'><a href='https://github.com/Keith98' target='_blank'><img class='responsive-img ourImage' src='assets/images/githublogo.jpg'></a></div>");
        var linkedinImgDiv=$("<div class='col s6'><a href='https://www.linkedin.com/in/keith-roland-56792015a/' target='_blank'><img class='responsive-img ourImage' src='assets/images/linkedinlogo.jpg'></a></div>");
        imgrow.append(githubImgDiv).append(linkedinImgDiv);
        var contactDiv = $("<div class='content'></div>");
        contactDiv.attr("value",4);
        contactDiv.append(contactTitle).append(contactContent1).append(imgrow).append(contactContent2);
        return contactDiv;
    }

    function populatePortfolio() {
        var portfolioTitle = $("<p id='portfolio-headText' class='red-text'>Portfolio</p>");
        //make cards from materialize card
        var projcard1 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/trainschedule.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>BTrain Scheduler</span></div><div class='card-content'><p class='card-textcontent'>Train Scheduler</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://keith98.github.io/Train-Scheduler/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' https://github.com/Keith98/Train-Scheduler' target='_blank'>GitHub</a></p></div></div>");
        var projcard2 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/cookieFinderPic.JPG'><span style='font-size:1.40em;' class='card-title white-text red'>Crystal</span></div><div class='card-content'><p class='card-textcontent'>Crystal Clicker Game </p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://keith98.github.io/unit-4-game/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/Keith98/unit-4-game' target='_blank'>GitHub</a></p></div></div>");
        var projcard3 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/time4colorboxthumbnail.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Time4ColorBox Mobile App Game</span></div><div class='card-content'><p class='card-textcontent'>The Hangman Game</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://keith98.github.io/Keith28.github.io/' target='_blank'>View Project</a></div></div>");
        var projcard4 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/gifwebpagethumbnail.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Giftastic Web App</span></div><div class='card-content'><p class='card-textcontent'>Giftastic</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://keith98.github.io/Giftastic/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' https://keith98.github.io/Giftastic/' target='_blank'>GitHub</a></p></div></div>");
        var projcard5 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/triviaquestiongamethumbnail.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Trivia Question Game</span></div><div class='card-content'><p class='card-textcontent'>Timed Trivia Question game </p></div><a style='font-size:1.40em;padding:10px;' class='red-text' ' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://keith98.github.io/TriviaGame/' target='_blank'>GitHub</a></p></div></div>");

        var cardrow = $("<div class='row'></div>");
        cardrow.append(projcard1).append(projcard2).append(projcard3);
        var cardrow2 = $("<div class='row'></div>");
        cardrow2.append(projcard4).append(projcard5);
        var portfolioDiv = $("<div class='content'></div>");
        portfolioDiv.attr("value",3);
        portfolioDiv.append(portfolioTitle).append(cardrow);
        portfolioDiv.append(cardrow2);
        return portfolioDiv;
    }

    function changeDiv(cValue,valueNew,newDiv){
        if(cValue != valueNew){
            $("div[value=" + cValue + "]").fadeOut(1000,function(){
                newDiv.fadeIn(500);
            });
        }
    }
    var currentValue = 1;
    var intro = populateIntro();
    var about = populateAbout();
    var portfolio = populatePortfolio();
    var contact = populateContact();
    $("#attachDiv").append(intro).append(about).append(portfolio).append(contact);
    //when user first loads page, only show intro
    
    about.hide();
    portfolio.hide();
    contact.hide();
    //click functions
    $("#homePage").click(function(){
        changeDiv(currentValue,1,intro);
        currentValue = 1;
    })
    $("#topTitle").click(function(){
        $("#homePage").trigger('click');
    })
    $("#aboutPage").click(function(){
        changeDiv(currentValue,2,about);
        currentValue = 2;
    })
    $("#portfolioPage").click(function(){
        changeDiv(currentValue,3,portfolio);
        currentValue = 3;
    })
    $("#contactPage").click(function(){
        changeDiv(currentValue,4,contact);
        currentValue = 4;
    })
})