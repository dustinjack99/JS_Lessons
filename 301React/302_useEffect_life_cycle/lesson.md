Start timer!

Slideshow Time!
`https://docs.google.com/presentation/d/1wlbd4ujYWxw6asNvxu6g7TTdk4lWRodRWBsnVPW8IeY/edit#slide=id.g13e08b8fe23_0_21`

**_ React LifeCycle _**

1. Slide 1 - Broken up into three parts: Mount, Update, Unmount

   - You can program logic for your components to perform at
     each of these stages.
   - Examples:
     - Make an async call to an API when you component first displays.
     - No more making 100 API calls before you even open a modal.
     - Only refresh a section of your UI when its state changes.
     - Can cleanup components and their running logic after they're unmounted, which is great for fixing memory leaks.

2. Slide 2 - Old Lifecycle vs. New Lifecycle

   - Most important parts of the lifecycle, Mount / Update / Unmount have been condensed into the useEffect function.
   - Not going over the other functions yet, because useEffect is going to cover 90% of your use cases.
   - The other 9.99% can probably be covered by useMemo, which will be in a seperate lesson (or if we have time today).

3. Slide 3 - just another visualization that useEffect takes these main three
   methods, and let's us use one hook for all of it.

4. What we've covered as far as advantages for AngularJS vs. React.

**_ DnD Demo _**

Note: Paste assets folder into the top level of create-react-app ;)
