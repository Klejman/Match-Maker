
$(document).ready(function(){
  $('select').chosen();
  $.validator.setDefaults({ ignore: ":hidden:not(.chosen-select)" }); //for all select having class .chosen-select
  $('form').validate();
});

<form>
<label>Name: <input name="test1" required></label>
<label>Favorite Color:
  <select name="test2" required>
<option value=""></option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
  </select>
  </label>
  <input type="submit">
  </form>