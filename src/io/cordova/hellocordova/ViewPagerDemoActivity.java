package io.cordova.hellocordova;

import android.app.Activity;
import android.os.Bundle;
import android.support.v4.view.ViewPager;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;

import java.util.ArrayList;
import java.util.List;


public class ViewPagerDemoActivity extends Activity implements View.OnClickListener,ViewPager.OnPageChangeListener {

    private ViewPager vp;
    private ViewPagerAdapter vpAdapter;
    private List<View> views;

    //引导图片资源
    private  static final int[] pics={R.drawable.welcome_1,
            R.drawable.welcome_2
            ,R.drawable.welcome_3};

    //记录当前选中位置
    private int currentIndex;

    public ViewPagerDemoActivity() {

    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.viewpager);

        views=new ArrayList<View>();
        LinearLayout.LayoutParams mParams=new LinearLayout.LayoutParams(LinearLayout.LayoutParams.WRAP_CONTENT,
               LinearLayout.LayoutParams.WRAP_CONTENT);
               //初始化引导图片列表
            for(int i=0;i<pics.length;i++){
                ImageView iv=new ImageView(this);
                iv.setLayoutParams(mParams);
                iv.setImageResource(pics[i]);
                views.add(iv);
            }
            vp=(ViewPager)findViewById(R.id.viewpager);
        //初始化Adapter
        vpAdapter=new ViewPagerAdapter(views);
        vp.setAdapter(vpAdapter);
        //绑定回调
        vp.setOnPageChangeListener(this);

    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_view_pager_demo, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
    //设置当前引导页
    private void setCurView(int position){
        if(position<0||position>=pics.length){
            return;
        }
        vp.setCurrentItem(position);
    }


    @Override
    public void onClick(View v) {
        int position=(Integer)v.getTag();
        setCurView(position);
    }

    //当当前页面被滑动时调用
    @Override
    public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {

    }

    //当新的页面被选中时调用
    @Override
    public void onPageSelected(int position) {

    }

    //当滑动状态改变时调用
    @Override
    public void onPageScrollStateChanged(int state) {

    }
}
