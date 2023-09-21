<script lang="ts">
    import Logo from "./assets/Images/EM.svg?component";
</script>

<div class="background">
    <div class="em-test">
        <div>
            <Logo class="sweep" />
        </div>
        <span>Excessive Motion</span>
    </div>
</div>


<style lang="scss">
@import "../assets/Fonts/Lato.scss";

:root {
    font-family: Lato;
    font-size: 16pt; // base font size
}

:global(body) {
    margin: 0;
    padding: 0;

    background-color: rgb(20, 20, 20);
    color: #fff; // default text color

    font-size: 1rem;
}

.em-test {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #141414;

    div {
        position: relative;
        width: 14rem;
        height: 14rem;

        :global(svg) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            padding: 0.15rem;
            box-sizing: border-box;

            :global(path) {
                fill: rgb(64, 64, 64) !important;
            }
        }

        :global(.sweep) {
            :global(path) {
                fill: rgb(255, 140, 0) !important;
            }

            clip-path: polygon(0% 0%, 0% 0%, -25% 100%, -25% 100%);
            animation: em_sweep 3s ease-in-out infinite forwards;

            filter: drop-shadow(0px 0px 4px rgb(255, 160, 0));
        }
    }

    span {
        width: 100%;
        font-family: LatoBlack;
        font-size: 1.5rem;
        text-align: center;
    }
}

@keyframes em_sweep {
    0% {
        clip-path: polygon(0% 0%, 0% 0%, -25% 100%, -25% 100%);
    }

    20% {
        clip-path: polygon(0% 0%, 125% 0%, 100% 100%, -25% 100%);
    }

    60% {
        clip-path: polygon(125% 0%, 125% 0%, 100% 100%, 100% 100%);
    }
}
</style>
