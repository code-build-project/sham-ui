/* eslint-disable max-len */

export default {
    example: `
<pre>
<code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">template</span>&gt;</span>
    <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">sh-button</span> <span style="color:rgb(1, 86, 146); font-weight:400;">variant</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;default&quot;</span>&gt;</span>
        My button
    <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">sh-button</span>&gt;</span>

    <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">sh-button</span> <span style="color:rgb(1, 86, 146); font-weight:400;">type</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;primary&quot;</span>&gt;</span>
        My button
    <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">sh-button</span>&gt;</span>

    <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">sh-button</span> <span style="color:rgb(1, 86, 146); font-weight:400;">size</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;medium&quot;</span>&gt;</span>
        My button
    <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">sh-button</span>&gt;</span>
<span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">template</span>&gt;</span>
</code>
</pre>
    `,

    source: `
<pre>
<code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">template</span>&gt;</span>
    <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">sh-button-origin</span>
        <span style="color:rgb(1, 86, 146); font-weight:400;">:isLoading</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;isLoading&quot;</span>
        <span style="color:rgb(1, 86, 146); font-weight:400;">:isDisabled</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;isDisabled&quot;</span>
        <span style="color:rgb(1, 86, 146); font-weight:400;">:class</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;componentClasses&quot;</span>
        @<span style="color:rgb(1, 86, 146); font-weight:400;">click</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;onClick&quot;</span>
    &gt;</span>
        <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">slot</span>&gt;</span><span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">slot</span>&gt;</span>
    <span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">sh-button-origin</span>&gt;</span>
<span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">template</span>&gt;</span>

<span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">script</span> <span style="color:rgb(1, 86, 146); font-weight:400;">setup</span> <span style="color:rgb(1, 86, 146); font-weight:400;">lang</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;ts&quot;</span>&gt;</span><span style="color:rgb(47, 51, 55); font-weight:400;">
<span style="color:rgb(1, 86, 146); font-weight:400;">import</span> { computed } <span style="color:rgb(1, 86, 146); font-weight:400;">from</span> <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;vue&#x27;</span>;
<span style="color:rgb(1, 86, 146); font-weight:400;">import</span> <span class="hljs-title class_">ShButtonOrigin</span> <span style="color:rgb(1, 86, 146); font-weight:400;">from</span> <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;@/components/ShButtonOrigin/index.vue&#x27;</span>;

<span style="color:rgb(1, 86, 146); font-weight:400;">const</span> props = <span class="hljs-title function_">withDefaults</span>(
    defineProps&lt;{
        isLoading?: boolean,
        isDisabled?: boolean,
        size?: string,
        variant?: string,
        type?: string,
    }&gt;(),
    {
        <span style="color:rgb(1, 86, 146); font-weight:400;">isLoading</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">false</span>,
        <span style="color:rgb(1, 86, 146); font-weight:400;">isDisabled</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">false</span>,
        <span style="color:rgb(1, 86, 146); font-weight:400;">size</span>: <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;medium&#x27;</span>,
        <span style="color:rgb(1, 86, 146); font-weight:400;">variant</span>: <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;default&#x27;</span>,
        <span style="color:rgb(1, 86, 146); font-weight:400;">type</span>: <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;primary&#x27;</span>,
    },
);

<span style="color:rgb(1, 86, 146); font-weight:400;">const</span> emit = defineEmits&lt;{
    (<span style="color:rgb(1, 86, 146); font-weight:400;">e</span>: <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;click&#x27;</span>): <span style="color:rgb(1, 86, 146); font-weight:400;">void</span>
}&gt;();

<span style="color:rgb(1, 86, 146); font-weight:400;">const</span> componentClasses = computed&lt;string[]&gt;(<span style="color:rgb(47, 51, 55); font-weight:400;">() =&gt;</span> {
    <span style="color:rgb(1, 86, 146); font-weight:400;">return</span> [
        <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;size-&#x27;</span> + props.<span style="color:rgb(47, 51, 55); font-weight:400;">size</span>,
        <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;variant-&#x27;</span> + props.<span style="color:rgb(47, 51, 55); font-weight:400;">variant</span>,
        <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;type-&#x27;</span> + props.<span style="color:rgb(47, 51, 55); font-weight:400;">type</span>,
    ];
});

<span style="color:rgb(1, 86, 146); font-weight:400;">function</span> <span class="hljs-title function_">onClick</span>(<span style="color:rgb(47, 51, 55); font-weight:400;"></span>): <span style="color:rgb(1, 86, 146); font-weight:400;">void</span> {
    <span class="hljs-title function_">emit</span>(<span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;click&#x27;</span>);
}
</span><span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">script</span>&gt;</span>

<span style="color:rgb(47, 51, 55); font-weight:400;">&lt;<span style="color:rgb(183, 85, 1); font-weight:400;">style</span> <span style="color:rgb(1, 86, 146); font-weight:400;">scoped</span> <span style="color:rgb(1, 86, 146); font-weight:400;">lang</span>=<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;sass&quot;</span>&gt;</span><span style="color:rgb(47, 51, 55); font-weight:400;">
<span style="color:rgb(1, 86, 146); font-weight:400;">.size</span>
    &amp;-small
        <span style="color:rgb(128, 51, 120); font-weight:400;">height</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">32px</span>
        font-size: <span style="color:rgb(183, 85, 1); font-weight:400;">14px</span>
    &amp;-medium
        height: <span style="color:rgb(183, 85, 1); font-weight:400;">40px</span>
        font-size: <span style="color:rgb(183, 85, 1); font-weight:400;">16px</span>
    &amp;-large
        height: <span style="color:rgb(183, 85, 1); font-weight:400;">48px</span>
        font-size: <span style="color:rgb(183, 85, 1); font-weight:400;">18px</span>

@mixin <span style="color:rgb(183, 85, 1); font-weight:400;">getType</span>($primary, $secondary)
    &amp;:<span style="color:rgb(183, 85, 1); font-weight:400;">is</span>(.variant-default)
        background: $primary
        color: $secondary
        &amp;:<span style="color:rgb(183, 85, 1); font-weight:400;">deep</span>(.loader-circle)
            border-color: $secondary
            border-bottom-color: transparent
    &amp;:<span style="color:rgb(183, 85, 1); font-weight:400;">is</span>(.variant-outline)
        background: transparent
        border: <span style="color:rgb(183, 85, 1); font-weight:400;">1px</span> solid $primary
        color: $primary
        &amp;:<span style="color:rgb(183, 85, 1); font-weight:400;">deep</span>(.loader-circle)
            border-color: $primary
            border-bottom-color: transparent
    &amp;:<span style="color:rgb(183, 85, 1); font-weight:400;">is</span>(.variant-text)
        background: transparent
        color: $primary
        &amp;:<span style="color:rgb(183, 85, 1); font-weight:400;">deep</span>(.loader-circle)
            border-color: $primary
            border-bottom-color: transparent

.type
    &amp;-default
        @include <span style="color:rgb(183, 85, 1); font-weight:400;">getType</span>($color-dark-<span style="color:rgb(183, 85, 1); font-weight:400;">1</span>, $color-white-<span style="color:rgb(183, 85, 1); font-weight:400;">1</span>)
    &amp;-primary
        @include <span style="color:rgb(183, 85, 1); font-weight:400;">getType</span>($color-blue-<span style="color:rgb(183, 85, 1); font-weight:400;">1</span>, $color-white-<span style="color:rgb(183, 85, 1); font-weight:400;">1</span>)
    &amp;-light
        @include <span style="color:rgb(183, 85, 1); font-weight:400;">getType</span>($color-gray-<span style="color:rgb(183, 85, 1); font-weight:400;">4</span>, $color-dark-<span style="color:rgb(183, 85, 1); font-weight:400;">1</span>)
    &amp;-danger
        @include <span style="color:rgb(183, 85, 1); font-weight:400;">getType</span>($color-red-<span style="color:rgb(183, 85, 1); font-weight:400;">1</span>, $color-white-<span style="color:rgb(183, 85, 1); font-weight:400;">1</span>)
    &amp;-success
        @include <span style="color:rgb(183, 85, 1); font-weight:400;">getType</span>($color-green-<span style="color:rgb(183, 85, 1); font-weight:400;">1</span>, $color-white-<span style="color:rgb(183, 85, 1); font-weight:400;">1</span>)

</span><span style="color:rgb(47, 51, 55); font-weight:400;">&lt;/<span style="color:rgb(183, 85, 1); font-weight:400;">style</span>&gt;</span>
</code>
</pre>
    `,
};