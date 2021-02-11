
function loaderandcount() {
    document.getElementById("loader-con").style.display = 'block';
    var text = document.getElementById("text");
    if (text.value == "") {
        document.getElementById("loader-con").style.display = 'none';

        document.getElementById("twc").innerHTML = "--"
        document.getElementById("sentence").innerHTML = "--"
        document.getElementById("avgWords").innerHTML = "--";
        document.getElementById("para").innerHTML ="--"
        document.getElementById("characters").innerHTML="--"



        return false
    }
    else {
        document.getElementById("loader-con").style.display = 'none';


        var total_words = text.value.trim().split(/ +/).length;


        document.getElementById("twc").innerHTML = total_words;

        var total_sentences = text.value.trim().split(/[\.\?\!]\s/).length;

        document.getElementById("sentence").innerHTML = total_sentences

        var avg_words_per_sentence = total_words / total_sentences;

        document.getElementById("avgWords").innerHTML = avg_words_per_sentence;

        // var paraCount= text.value.split("\n\n").length;
        var my_data = text.value;
        var strip_whitespace = /\s+/gi;

        my_data = my_data.split("\n\n");
        var g = my_data.length;
        var i = 0;
        
        while (g >= 0) {
            g--;
            var tmp = my_data[g];
            tmp = tmp ? tmp.replace(strip_whitespace, "") : tmp;
            
            if (tmp && tmp.length > 1) {
                i++;
            }
        }

        document.getElementById("para").innerHTML =i
        

        /** */

        var len=text.value.replace(/\s+/g, '')
        document.getElementById("characters").innerHTML=len.length

    }
    //    alert(text.value)



}




// document.getElementsByClassName('run').onclick=loaderon

