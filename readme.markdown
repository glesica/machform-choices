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
