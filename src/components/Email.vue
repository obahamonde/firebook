<template>
<div>
<form @submit.prevent="onSubmit">
<div class="form-group">
<div>
    <label for="from">From:</label>
    <input type="email" class="form-control" id="from" v-model="from" placeholder="Enter email">
    <label for="name">Name:</label>
   
    <input type="text" class="form-control" id="name" v-model="name" placeholder="Enter name">
</div>
<div>
    <label for="to">To:</label>
    <input type="email" class="form-control" id="to" v-model="to" placeholder="Enter email">
</div>
<div>
<textarea class="form-control" id="message" v-model="message" rows="8" columns="12" placeholder="Enter message"></textarea>
</div>    
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>