/*
quick_choices.js
Javascript hacks to manage choices for a Machform drop down field
George Lesica <glesica@gmail.com>

Installation:

1) Insert the following in edit_form.php inside the fieldset for drop down list choices (around line 339)

<label for="quick_choices">Quick Choices</label><br />
<textarea class="textarea" style="width:200px;" id="quick_choices"></textarea>                                 
<div class="buttons"><a id="qc_insert">Insert</a> <a id="qc_delete_all">Delete All</a></div>

2) Place a copy of this file in the js directory of your Machform install

3) Include a reference to this file in the include/header.php file (best to make it the last one inside <head>)

Instructions:

Once the script has been installed a text box will appear at the bottom of
the Choices properties box. When the Insert button is clicked, each line of
this box will be added as a new choice for the current drop down object.
This allows lists to be rapidly constructed by copy-pasting.

It will also insert a button (Delete All) to clear the list of choices. This 
lets you easily wipe out and update an entire list.

Notes:

This is only known to work with Machform 2
*/

JJ(document).ready(function() {
    JJ('#qc_insert')
    .click(function() {
        // find out how many old choices we have so we can start after them
        old_choices_count = JJ('#element_choices li').length;
        // parse new choices from the text box
        var new_choices_text = JJ('#quick_choices').val();
        JJ('#quick_choices').val('');
        var new_choices = [];
        if (new_choices_text != '') {
            new_choices = new_choices_text.split('\n');
        }
        // insert the new choices
        for (var i=0; i<new_choices.length; i++) {
            insert_choice(old_choices_count + i);
        }
        // fill in the new fields and register their values
        for (var i=0; i<new_choices.length; i++) {
            current_index = old_choices_count + i;
            // set the current box and register its value
            JJ('input#choice' + current_index)
            .val(new_choices[i])
            .keyup();
        }
    });
    JJ('#qc_delete_all')
    .click(function() {
        var $delete_buttons = JJ('#element_choices li img[title=Delete]');
        // hit the delete button on all but the last (since that will cause an error)
        for (var i=1; i<$delete_buttons.length; i++) {
            JJ($delete_buttons[0]).click();
        }
        // set the last one to blank
        JJ('input#choice0')
        .val('First option')
        .keyup();
    });
});
