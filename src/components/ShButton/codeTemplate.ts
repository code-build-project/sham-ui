/* eslint-disable max-len */

export default {
    example: `
<pre>
<code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">template</span>&gt;</span>
    <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">sh-button-origin</span> <span style="color:rgb(1, 86, 146); font-weight:400;">is-loading</span>&gt;</span>
        Loading button
    <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">sh-button-origin</span>&gt;</span>
    
    <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">sh-button-origin</span> <span style="color:rgb(1, 86, 146); font-weight:400;">is-disabled</span>&gt;</span>
        Disabled button
    <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">sh-button-origin</span>&gt;</span>
<span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">template</span>&gt;</span>
</code>
</pre>
    `,

    source: `
<pre>
<code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">template</span>&gt;</span>
    <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">button</span>
        <span style="color:rgb(1, 86, 146); font-weight:400;">class</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;button&quot;</span>
        <span style="color:rgb(1, 86, 146); font-weight:400;">:class</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;componentClasses&quot;</span>
        @<span style="color:rgb(1, 86, 146); font-weight:400;">click</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;onClick&quot;</span>
    &gt;</span>
        <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">div</span>
            <span style="color:rgb(1, 86, 146); font-weight:400;">v-if</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;isLoading&quot;</span>
            <span style="color:rgb(1, 86, 146); font-weight:400;">class</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;loader&quot;</span>
        &gt;</span>
            <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">div</span> <span style="color:rgb(1, 86, 146); font-weight:400;">class</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;loader-circle&quot;</span>&gt;</span><span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">div</span>&gt;</span>
        <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">div</span>&gt;</span>

        <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">div</span> <span style="color:rgb(1, 86, 146); font-weight:400;">class</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;text&quot;</span>&gt;</span>
            <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">slot</span>&gt;</span>Button<span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">slot</span>&gt;</span>
        <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">button</span>&gt;</span>
<span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">template</span>&gt;</span>

<span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">script</span> <span style="color:rgb(1, 86, 146); font-weight:400;">setup</span> <span style="color:rgb(1, 86, 146); font-weight:400;">lang</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;ts&quot;</span>&gt;</span><span style="color:rgb(47, 51, 55); font-weight:400;">
<span style="color:rgb(1, 86, 146); font-weight:400;">import</span> { computed } <span style="color:rgb(1, 86, 146); font-weight:400;">from</span> <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;vue&#x27;</span>;

<span style="color:rgb(1, 86, 146); font-weight:400;">const</span> props = <span class="hljs-title function_">withDefaults</span>(
    defineProps&lt;{
        isLoading?: boolean,
        isDisabled?: boolean,
    }&gt;(),
    {
        <span style="color:rgb(1, 86, 146); font-weight:400;">isLoading</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">false</span>,
        <span style="color:rgb(1, 86, 146); font-weight:400;">isDisabled</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">false</span>,
    },
);

<span style="color:rgb(1, 86, 146); font-weight:400;">const</span> componentClasses = computed&lt;object&gt;(<span style="color:rgb(47, 51, 55); font-weight:400;">() =&gt;</span> {
    <span style="color:rgb(1, 86, 146); font-weight:400;">return</span> {
        <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;loading&#x27;</span>: props.<span style="color:rgb(47, 51, 55); font-weight:400;">isLoading</span>,
        <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;disabled&#x27;</span>: props.<span style="color:rgb(47, 51, 55); font-weight:400;">isDisabled</span>,
    };
});

<span style="color:rgb(1, 86, 146); font-weight:400;">const</span> emit = defineEmits&lt;{
    (<span style="color:rgb(1, 86, 146); font-weight:400;">e</span>: <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;click&#x27;</span>): <span style="color:rgb(1, 86, 146); font-weight:400;">void</span>
}&gt;();

<span style="color:rgb(1, 86, 146); font-weight:400;">function</span> <span class="hljs-title function_">onClick</span>(<span style="color:rgb(47, 51, 55); font-weight:400;"></span>): <span style="color:rgb(1, 86, 146); font-weight:400;">void</span> {
    <span style="color:rgb(1, 86, 146); font-weight:400;">if</span> (props.<span style="color:rgb(47, 51, 55); font-weight:400;">isLoading</span> || props.<span style="color:rgb(47, 51, 55); font-weight:400;">isDisabled</span>) {
        <span style="color:rgb(1, 86, 146); font-weight:400;">return</span>;
    }

    <span class="hljs-title function_">emit</span>(<span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;click&#x27;</span>);
}

</span><span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">script</span>&gt;</span>

<span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">style</span> <span style="color:rgb(1, 86, 146); font-weight:400;">scoped</span> <span style="color:rgb(1, 86, 146); font-weight:400;">lang</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;sass&quot;</span>&gt;</span><span style="color:rgb(47, 51, 55); font-weight:400;">
<span style="color:rgb(1, 86, 146); font-weight:400;">.button</span>
    <span style="color:rgb(1, 86, 146); font-weight:400;">@extend</span> .flex_row-center-center
    <span style="color:rgb(128, 51, 120); font-weight:400;">position</span>: relative
    <span style="color:rgb(128, 51, 120); font-weight:400;">padding</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">12px</span> <span style="color:rgb(183, 85, 1); font-weight:400;">20px</span>
    <span style="color:rgb(128, 51, 120); font-weight:400;">background</span>: $color-blue-<span style="color:rgb(183, 85, 1); font-weight:400;">1</span>
    <span style="color:rgb(128, 51, 120); font-weight:400;">color</span>: $color-white-<span style="color:rgb(183, 85, 1); font-weight:400;">1</span>
    <span style="color:rgb(128, 51, 120); font-weight:400;">border</span>: none
    <span style="color:rgb(128, 51, 120); font-weight:400;">border-radius</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">8px</span>
    <span style="color:rgb(128, 51, 120); font-weight:400;">font-weight</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">600</span>
    <span style="color:rgb(128, 51, 120); font-weight:400;">font-size</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">16px</span>
    <span style="color:rgb(128, 51, 120); font-weight:400;">overflow</span>: hidden
    &amp;:<span style="color:rgb(128, 51, 120); font-weight:400;">hover</span>
        <span style="color:rgb(128, 51, 120); font-weight:400;">filter</span>: brightness(<span style="color:rgb(183, 85, 1); font-weight:400;">97%</span>)
    &amp;:active
        <span style="color:rgb(128, 51, 120); font-weight:400;">opacity</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">0.9</span>

.loader
    @extend .flex_row-center-center
    <span style="color:rgb(128, 51, 120); font-weight:400;">position</span>: absolute
    <span style="color:rgb(128, 51, 120); font-weight:400;">width</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">100%</span>
    <span style="color:rgb(128, 51, 120); font-weight:400;">height</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">100%</span>
    &amp;-circle
        <span style="color:rgb(128, 51, 120); font-weight:400;">width</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">18px</span>
        <span style="color:rgb(128, 51, 120); font-weight:400;">height</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">18px</span>
        <span style="color:rgb(128, 51, 120); font-weight:400;">border</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">2.5px</span> solid $color-white-<span style="color:rgb(183, 85, 1); font-weight:400;">1</span>
        <span style="color:rgb(128, 51, 120); font-weight:400;">border-bottom-color</span>: transparent
        <span style="color:rgb(128, 51, 120); font-weight:400;">border-radius</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">50%</span>
        <span style="color:rgb(128, 51, 120); font-weight:400;">box-sizing</span>: border-box
        <span style="color:rgb(128, 51, 120); font-weight:400;">animation</span>: rotation <span style="color:rgb(183, 85, 1); font-weight:400;">0.9s</span> linear infinite
        @keyframes rotation
            <span style="color:rgb(183, 85, 1); font-weight:400;">0%</span>
                <span style="color:rgb(128, 51, 120); font-weight:400;">transform</span>: rotate(<span style="color:rgb(183, 85, 1); font-weight:400;">0deg</span>)
            <span style="color:rgb(183, 85, 1); font-weight:400;">100%</span>
                <span style="color:rgb(128, 51, 120); font-weight:400;">transform</span>: rotate(<span style="color:rgb(183, 85, 1); font-weight:400;">360deg</span>)

.loading
    <span style="color:rgb(128, 51, 120); font-weight:400;">pointer-events</span>: none
    <span style="color:rgb(128, 51, 120); font-weight:400;">opacity</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">0.9</span>
    .text
        <span style="color:rgb(128, 51, 120); font-weight:400;">opacity</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">0</span>

.disabled
    <span style="color:rgb(128, 51, 120); font-weight:400;">opacity</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">0.8</span>
    <span style="color:rgb(128, 51, 120); font-weight:400;">cursor</span>: not-allowed
    &amp;.button
        &amp;:<span style="color:rgb(128, 51, 120); font-weight:400;">hover</span>
            <span style="color:rgb(128, 51, 120); font-weight:400;">filter</span>: brightness(<span style="color:rgb(183, 85, 1); font-weight:400;">100%</span>)
        &amp;:active
            <span style="color:rgb(128, 51, 120); font-weight:400;">opacity</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">0.8</span>

</span><span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">style</span>&gt;</span>
</code>
</pre>
    `,
};