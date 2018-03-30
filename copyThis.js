<script>
function myFunction() {
  var copyText = document.getElementById("copyLink");
  copyText.select();
  document.execCommand("Copy");
  alert("Copied the text: " + copyText.value);
}
</script>
