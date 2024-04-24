<template>
    <div class="text-center">
        <h2>Post Data</h2>
        <div
            class="border border-dark rounded p-3 mx-3 shadow col-md-8 col-lg-6"
        >
            <h4>Form</h4>
            <div class="d-flex my-1">
                <div class="col-2">Id</div>
                <input type="number" v-model="idInput" class="form-control" />
            </div>
            <div class="text-left text-danger" v-if="!idValidation.isValid">
                {{ idValidation.msg }}
            </div>
            <div class="d-flex my-1">
                <div class="col-2">Name</div>
                <input
                    type="text"
                    class="form-control"
                    v-model.trim="nameInput"
                />
            </div>
            <div class="text-left text-danger" v-if="!nameValidation.isValid">
                {{ nameValidation.msg }}
            </div>
            <div class="d-flex my-1">
                <div class="col-2">Rank</div>
                <input
                    type="number"
                    v-model.number="rankInput"
                    class="form-control"
                />
            </div>
            <button class="btn btn-success" @click="submit">Submit</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            idInput: null,
            nameInput: "",
            rankInput: null,
            idValidation: {
                isValid: true,
                msg: "",
            },
            nameValidation: {
                isValid: true,
                msg: "",
            },
        };
    },
    methods: {
        submit() {
            if (!this.validate()) {
                console.log("is not valid form");
                return;
            }
            console.log("submit");
            const data = {
                id: String(this.idInput),
                name: this.nameInput,
                rank: this.rankInput ? this.rankInput : undefined,
            };
            this.idInput = "";
            this.rankInput = "";
            this.nameInput = null;
            this.postData(data);
        },
        postData(data) {
            console.log(JSON.stringify(data));
            console.log(data);
            fetch("http://localhost:3000/user", {
                method: "post",
                body: JSON.stringify(data),
            }).catch((e) => console.table(e));
        },
        validate() {
            if (this.idInput < 1) {
                this.idValidation.msg = "Id can not be negative or zero";
                this.idValidation.isValid = false;
            } else {
                this.idValidation.isValid = true;
            }
            console.log(this.nameInput);
            if (this.nameInput === "") {
                console.log("false name");
                this.nameValidation.isValid = false;
                this.nameValidation.msg = "Name can not be empty";
            } else {
                console.log("true name");
                this.nameValidation.isValid = true;
            }
            return this.idValidation.isValid && this.nameValidation.isValid;
        },
    },
};
</script>
