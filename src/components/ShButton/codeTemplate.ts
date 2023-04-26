/* eslint-disable max-len */

export default {
    example: `
<pre>
<code id="htmlViewer" style="color:rgb(84, 84, 84); font-weight:400;background-color:#fafafa;background:#fafafa;display:block;padding: .5em;"><span style="color:rgb(217, 30, 24); font-weight:400;">&lt;<span style="color:rgb(217, 30, 24); font-weight:400;">template</span>&gt;</span>
    <span style="color:rgb(217, 30, 24); font-weight:400;">&lt;<span style="color:rgb(217, 30, 24); font-weight:400;">button</span> <span style="color:rgb(217, 30, 24); font-weight:400;">class</span>=<span style="color:rgb(0, 128, 0); font-weight:400;">&quot;button&quot;</span>&gt;</span>
        <span style="color:rgb(217, 30, 24); font-weight:400;">&lt;<span style="color:rgb(217, 30, 24); font-weight:400;">slot</span>&gt;</span>Button<span style="color:rgb(217, 30, 24); font-weight:400;">&lt;/<span style="color:rgb(217, 30, 24); font-weight:400;">slot</span>&gt;</span>
    <span style="color:rgb(217, 30, 24); font-weight:400;">&lt;/<span style="color:rgb(217, 30, 24); font-weight:400;">button</span>&gt;</span>
<span style="color:rgb(217, 30, 24); font-weight:400;">&lt;/<span style="color:rgb(217, 30, 24); font-weight:400;">template</span>&gt;</span>

<span style="color:rgb(217, 30, 24); font-weight:400;">&lt;<span style="color:rgb(217, 30, 24); font-weight:400;">script</span> <span style="color:rgb(217, 30, 24); font-weight:400;">setup</span> <span style="color:rgb(217, 30, 24); font-weight:400;">lang</span>=<span style="color:rgb(0, 128, 0); font-weight:400;">&quot;ts&quot;</span>&gt;</span><span style="color:rgb(84, 84, 84); font-weight:400;">
<span style="color:rgb(121, 40, 161); font-weight:400;">import</span> { ref, reactive } <span style="color:rgb(121, 40, 161); font-weight:400;">from</span> <span style="color:rgb(0, 128, 0); font-weight:400;">&#x27;vue&#x27;</span>;

interface <span class="hljs-title class_">Variant</span> {
    <span style="color:rgb(217, 30, 24); font-weight:400;">id</span>: string,
    <span style="color:rgb(217, 30, 24); font-weight:400;">name</span>: string,
}

<span style="color:rgb(121, 40, 161); font-weight:400;">const</span> variant = <span class="hljs-title function_">ref</span>(<span style="color:rgb(0, 128, 0); font-weight:400;">&#x27;&#x27;</span>);
<span style="color:rgb(121, 40, 161); font-weight:400;">const</span> <span style="color:rgb(217, 30, 24); font-weight:400;">variantList</span>: <span class="hljs-title class_">Variant</span>[] = <span class="hljs-title function_">reactive</span>([
    { <span style="color:rgb(217, 30, 24); font-weight:400;">id</span>: <span style="color:rgb(0, 128, 0); font-weight:400;">&#x27;1&#x27;</span>, <span style="color:rgb(217, 30, 24); font-weight:400;">name</span>: <span style="color:rgb(0, 128, 0); font-weight:400;">&#x27;sdfs&#x27;</span>},
    { <span style="color:rgb(217, 30, 24); font-weight:400;">id</span>: <span style="color:rgb(0, 128, 0); font-weight:400;">&#x27;2&#x27;</span>, <span style="color:rgb(217, 30, 24); font-weight:400;">name</span>: <span style="color:rgb(0, 128, 0); font-weight:400;">&#x27;vvvvv&#x27;</span>},
]);

<span style="color:rgb(121, 40, 161); font-weight:400;">const</span> textButton = <span class="hljs-title function_">ref</span>(<span style="color:rgb(0, 128, 0); font-weight:400;">&#x27;&#x27;</span>);
</span><span style="color:rgb(217, 30, 24); font-weight:400;">&lt;/<span style="color:rgb(217, 30, 24); font-weight:400;">script</span>&gt;</span>

<span style="color:rgb(217, 30, 24); font-weight:400;">&lt;<span style="color:rgb(217, 30, 24); font-weight:400;">style</span> <span style="color:rgb(217, 30, 24); font-weight:400;">scoped</span> <span style="color:rgb(217, 30, 24); font-weight:400;">lang</span>=<span style="color:rgb(0, 128, 0); font-weight:400;">&quot;sass&quot;</span>&gt;</span><span style="color:rgb(84, 84, 84); font-weight:400;">
<span style="color:rgb(217, 30, 24); font-weight:400;">.button</span>
    <span style="color:rgb(121, 40, 161); font-weight:400;">@extend</span> .flex_row-center-center
    <span style="color:rgb(170, 93, 0); font-weight:400;">width</span>: <span style="color:rgb(170, 93, 0); font-weight:400;">112px</span>
    <span style="color:rgb(170, 93, 0); font-weight:400;">height</span>: <span style="color:rgb(170, 93, 0); font-weight:400;">44px</span>
    <span style="color:rgb(170, 93, 0); font-weight:400;">background</span>: $color-blue-<span style="color:rgb(170, 93, 0); font-weight:400;">1</span>
    <span style="color:rgb(170, 93, 0); font-weight:400;">color</span>: $color-white-<span style="color:rgb(170, 93, 0); font-weight:400;">1</span>
    <span style="color:rgb(170, 93, 0); font-weight:400;">border</span>: none
    <span style="color:rgb(170, 93, 0); font-weight:400;">border-radius</span>: <span style="color:rgb(170, 93, 0); font-weight:400;">8px</span>
    <span style="color:rgb(170, 93, 0); font-weight:400;">font-weight</span>: <span style="color:rgb(170, 93, 0); font-weight:400;">600</span>
    <span style="color:rgb(170, 93, 0); font-weight:400;">font-size</span>: <span style="color:rgb(170, 93, 0); font-weight:400;">16px</span>

</span><span style="color:rgb(217, 30, 24); font-weight:400;">&lt;/<span style="color:rgb(217, 30, 24); font-weight:400;">style</span>&gt;</span></code></pre>
    `,

    source: `
<pre>
<code id="htmlViewer" style="color:rgb(84, 84, 84); font-weight:400;background-color:#fafafa;background:#fafafa;display:block;padding: .5em;"><span style="color:rgb(217, 30, 24); font-weight:400;">&lt;<span style="color:rgb(217, 30, 24); font-weight:400;">template</span>&gt;</span>
    <span style="color:rgb(217, 30, 24); font-weight:400;">&lt;<span style="color:rgb(217, 30, 24); font-weight:400;">button</span> <span style="color:rgb(217, 30, 24); font-weight:400;">class</span>=<span style="color:rgb(0, 128, 0); font-weight:400;">&quot;button&quot;</span>&gt;</span>
        <span style="color:rgb(217, 30, 24); font-weight:400;">&lt;<span style="color:rgb(217, 30, 24); font-weight:400;">slot</span>&gt;</span>Button<span style="color:rgb(217, 30, 24); font-weight:400;">&lt;/<span style="color:rgb(217, 30, 24); font-weight:400;">slot</span>&gt;</span>
<span style="color:rgb(121, 40, 161); font-weight:400;">const</span> textButton = <span class="hljs-title function_">ref</span>(<span style="color:rgb(0, 128, 0); font-weight:400;">&#x27;&#x27;</span>);
</span><span style="color:rgb(217, 30, 24); font-weight:400;">&lt;/<span style="color:rgb(217, 30, 24); font-weight:400;">script</span>&gt;</span>

<span style="color:rgb(217, 30, 24); font-weight:400;">&lt;<span style="color:rgb(217, 30, 24); font-weight:400;">style</span> <span style="color:rgb(217, 30, 24); font-weight:400;">scoped</span> <span style="color:rgb(217, 30, 24); font-weight:400;">lang</span>=<span style="color:rgb(0, 128, 0); font-weight:400;">&quot;sass&quot;</span>&gt;</span><span style="color:rgb(84, 84, 84); font-weight:400;">
<span style="color:rgb(217, 30, 24); font-weight:400;">.button</span>
    <span style="color:rgb(121, 40, 161); font-weight:400;">@extend</span> .flex_row-center-center
    <span style="color:rgb(170, 93, 0); font-weight:400;">width</span>: <span style="color:rgb(170, 93, 0); font-weight:400;">112px</span>
    <span style="color:rgb(170, 93, 0); font-weight:400;">height</span>: <span style="color:rgb(170, 93, 0); font-weight:400;">44px</span>
    <span style="color:rgb(170, 93, 0); font-weight:400;">background</span>: $color-blue-<span style="color:rgb(170, 93, 0); font-weight:400;">1</span>
    <span style="color:rgb(170, 93, 0); font-weight:400;">color</span>: $color-white-<span style="color:rgb(170, 93, 0); font-weight:400;">1</span>
    <span style="color:rgb(170, 93, 0); font-weight:400;">border</span>: none
    <span style="color:rgb(170, 93, 0); font-weight:400;">border-radius</span>: <span style="color:rgb(170, 93, 0); font-weight:400;">8px</span>
    <span style="color:rgb(170, 93, 0); font-weight:400;">font-weight</span>: <span style="color:rgb(170, 93, 0); font-weight:400;">600</span>
    <span style="color:rgb(170, 93, 0); font-weight:400;">font-size</span>: <span style="color:rgb(170, 93, 0); font-weight:400;">16px</span>

</span><span style="color:rgb(217, 30, 24); font-weight:400;">&lt;/<span style="color:rgb(217, 30, 24); font-weight:400;">style</span>&gt;</span></code></pre>
    `,
};